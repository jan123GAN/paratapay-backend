import { Request, response, Response } from "express";
import { successResponse, errorResponse } from "../../utils/response";
import { PrismaClient, Prisma } from "@prisma/client";
import { createExpenseSchema, createSettlementSchema } from "../../validators/expense.validator";
import { buildExpenseSplitPlan } from "./expense.logic";

const prisma = new PrismaClient();


export const createExpense = async (req: Request, res: Response) => {
  const validationResult = createExpenseSchema.safeParse(req.body);
  if (!validationResult.success) {
    return res.status(400).json(errorResponse("Validation error", validationResult.error.issues));
  }

  const {
    group_id,
    created_by,
    amount,
    currency_code,
    split_type,
    expense_date,
    paid_by_data,
    expense_data,
    description,
    category,
  } = validationResult.data;

  try {
    const amountDecimal = new Prisma.Decimal(amount);
    const groupMembers = await prisma.group_members.findMany({ where: { group_id, isInGroup: true } });

    if (groupMembers.length === 0) {
      return res.status(400).json(errorResponse("No active group members found for this group."));
    }

    const groupMemberIds = new Set(groupMembers.map(member => member.user_id));
    const invalidMembers = Array.from(new Set([...paid_by_data.map(entry => entry.user_id), ...expense_data.map(entry => entry.user_id)]))
      .filter(userId => !groupMemberIds.has(userId));

    if (invalidMembers.length > 0) {
      return res.status(400).json(errorResponse("Some users are not members of the group", invalidMembers));
    }

    const splitPlan = buildExpenseSplitPlan({
      amount,
      splitType: split_type,
      paidByData: paid_by_data,
      expenseData: expense_data,
      groupMembers,
    });

    const finalResult = await prisma.$transaction(async (tx) => {
      const expense = await tx.expenses.create({
        data: {
          group_id,
          created_by,
          paid_by: paid_by_data[0].user_id,
          amount: amountDecimal,
          description,
          category,
          currency_code,
          expense_date: expense_date,
          split_type,
        },
      });

      await tx.expense_splits.createMany({
        data: splitPlan.shareRecords.map(s => ({ ...s, expense_id: expense.id }))
      });

      for (const [userId, delta] of splitPlan.balanceDeltas.entries()) {
        const signedDelta = delta.toString();
        await tx.balances.upsert({
          where: { user_id_group_id_currency_code: { user_id: userId, group_id, currency_code } },
          update: { balance: { increment: new Prisma.Decimal(signedDelta) }, last_update: new Date() },
          create: { user_id: userId, group_id, currency_code, balance: new Prisma.Decimal(signedDelta), last_update: new Date() }
        });
      }

      return expense;
    });

    return res.status(201).json(successResponse("Expense created and balances updated", finalResult));
  } catch (err: any) {
    return res.status(500).json(errorResponse("Server Error", err.message));
  }
};
export const createSettlement = async (req: Request, res: Response) => {
  const validationResult = createSettlementSchema.safeParse(req.body);

  if (!validationResult.success) {
    return res.status(400).json(errorResponse("Validation error", validationResult.error.issues));
  }

  const { group_id, from_user_id, to_user_id, amount, currency_code, method } = validationResult.data;

  try {
    // Step 1: Ensure all related records exist
    const groupExists = await prisma.groups.findUnique({ where: { id: group_id } });
    const fromUserExists = await prisma.users.findUnique({ where: { id: from_user_id } });
    const toUserExists = await prisma.users.findUnique({ where: { id: to_user_id } });

    if (!groupExists || !fromUserExists || !toUserExists) {
      throw new Error("Group or user not found.");
    }

    

    // Use Prisma Decimal for precise calculations
    const amountDecimal = new Prisma.Decimal(amount);

    // Step 2: Create the settlement record
    const settlement = await prisma.settlements.create({
      data: {
        group_id,
        from_user_id,
        to_user_id,
        amount: amountDecimal,
        currency_code,
        method,
        status: "IN_PROGRESS",
        settled_at: new Date(),
      },
    });

    // Step 3: Update the balance of the payer (from_user_id)
    await prisma.balances.upsert({
      where: {
        user_id_group_id_currency_code: {
          user_id: from_user_id,
          group_id: group_id,
          currency_code: currency_code,
        },
      },
      update: {
        balance: { decrement: amountDecimal },
        last_update: new Date(),
      },
      create: {
        user_id: from_user_id,
        group_id: group_id,
        currency_code: currency_code,
        balance: amountDecimal.neg(),
        last_update: new Date(),
      },
    });

    // Step 4: Update the balance of the receiver (to_user_id)
    await prisma.balances.upsert({
      where: {
        user_id_group_id_currency_code: {
          user_id: to_user_id,
          group_id: group_id,
          currency_code: currency_code,
        },
      },
      update: {
        balance: { increment: amountDecimal },
        last_update: new Date(),
      },
      create: {
        user_id: to_user_id,
        group_id: group_id,
        currency_code: currency_code,
        balance: amountDecimal,
        last_update: new Date(),
      },
    });

    return res.status(201).json(successResponse("Balance settled successfully", settlement));
  } catch (error: any) {
    console.error("Failed to create settlement:", error);
    return res.status(500).json(errorResponse("Internal server error", error.message));
  }
};

// Yeh function kisi group ke sabhi members ka current balance laata hai.
export const getGroupBalances = async (req: Request, res: Response) => {
  const { group_id } = req.params;

  try {
    const balances = await prisma.balances.findMany({
      where: { group_id },
      include: {
        userBalances: {
          select: {
            id: true,
            displayName: true,
            avatarUrl: true,
          },
        },
      },
    });

    return res.status(200).json(successResponse("Group balances fetched successfully", balances));
  } catch (error: any) {
    console.error("Failed to fetch group balances:", error);
    return res.status(500).json(errorResponse("Internal server error", error.message));
  }
};
export const getExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;   // ✅ only take the id string
    console.log("Expense ID:", id);

    const expense = await prisma.expenses.findFirst({
      where: { id },   // ✅ now this is string, correct
    });

    if (!expense) {
      return res.status(404).json(errorResponse("Expense not found"));
    }

    return res
      .status(200)
      .json(successResponse("Expense fetched successfully", expense));
  } catch (error) {
    console.error("Error fetching expense:", error);
    return res.status(500).json(errorResponse("Internal server error"));
  }
};


export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await prisma.expenses.findMany({
      orderBy: { createdAt: "desc" }, // ✅ latest pehle dikhane ke liye
    });

    return res
      .status(200)
      .json(successResponse("Expenses fetched successfully", expenses));
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return res.status(500).json(errorResponse("Internal server error"));
  }
};


export const deleteExpense = async (req:Request, res:Response) => {
  try {
    const {id} = req.params;
    const expense = await prisma.expenses.findUnique({ where: { id } });

    if (!expense) {
      return res.status(404).json(errorResponse("Expense not found"));
    }

    const splits = await prisma.expense_splits.findMany({ where: { expense_id: id } });
    const reverseDeltas = new Map<string, Prisma.Decimal>();

    for (const split of splits) {
      const delta = new Prisma.Decimal(split.amount).neg();
      const current = reverseDeltas.get(split.user_id) ?? new Prisma.Decimal(0);
      reverseDeltas.set(split.user_id, current.plus(delta));
    }

    const paidByDelta = expense.amount.neg();
    const currentPaid = reverseDeltas.get(expense.paid_by) ?? new Prisma.Decimal(0);
    reverseDeltas.set(expense.paid_by, currentPaid.plus(paidByDelta));

    for (const [userId, delta] of reverseDeltas.entries()) {
      await prisma.balances.upsert({
        where: { user_id_group_id_currency_code: { user_id: userId, group_id: expense.group_id, currency_code: expense.currency_code } },
        update: { balance: { increment: delta }, last_update: new Date() },
        create: { user_id: userId, group_id: expense.group_id, currency_code: expense.currency_code, balance: delta, last_update: new Date() }
      });
    }

    await prisma.expense_splits.deleteMany({ where: { expense_id: id } });
    await prisma.expenses.delete({ where: { id } });

    return res.status(200).json(successResponse("Expense deleted successfully", expense));
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as any).code === "ECONNREFUSED" || (error as any).code === "ENOTFOUND"
    ) {
      return res
        .status(503)
        .json(errorResponse("Database/Network unavailable. Try again later."));
    }
    return res.status(500).json(errorResponse("Internal server error"));
  }
}
