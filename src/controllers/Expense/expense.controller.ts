import { Request, response, Response } from "express";
import { successResponse, errorResponse } from "../../utils/response";
import { PrismaClient, Prisma } from "@prisma/client";
import { createExpenseSchema, createSettlementSchema } from "../../validators/expense.validator";

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

    const payerUserId = paid_by_data[0].user_id;

    let splitRecords: any[] = [];
    if (split_type === "EQUAL_SPLIT") {
      const share = amountDecimal.div(groupMembers.length);
      let remaining = amountDecimal;

      splitRecords = groupMembers.map((member, index) => {
        const isLast = index === groupMembers.length - 1;
        const exactAmount = isLast ? remaining : share;
        remaining = remaining.minus(exactAmount);

        return {
          user_id: member.user_id,
          amount: exactAmount,
          own_by: payerUserId,
          percentage: exactAmount.div(amountDecimal).mul(100),
          exact_amount: exactAmount,
        };
      });
    } else {
      splitRecords = expense_data.map((s: any) => {
        const exactAmount = new Prisma.Decimal(s.amount);
        return {
          user_id: s.user_id,
          amount: exactAmount,
          own_by: payerUserId,
          percentage: amountDecimal.isZero()
            ? new Prisma.Decimal(0)
            : exactAmount.div(amountDecimal).mul(100),
          exact_amount: exactAmount,
        };
      });
    }

    const finalResult = await prisma.$transaction(async (tx) => {
      // 1. Create Main Expense
      const expense = await tx.expenses.create({
        data: {
          group_id,
          created_by,
          paid_by: payerUserId,
          amount: amountDecimal,
          description,
          category,
          currency_code,
          expense_date: expense_date,
          split_type,
        },
      });

      // 2. Create Splits
      await tx.expense_splits.createMany({
        data: splitRecords.map(s => ({ ...s, expense_id: expense.id }))
      });

      // 3. Increment Balances for Payers (multi-payer support)
      for (const payer of paid_by_data) {
        await tx.balances.upsert({
          where: { user_id_group_id_currency_code: { user_id: payer.user_id, group_id, currency_code } },
          update: { balance: { increment: new Prisma.Decimal(payer.amount) }, last_update: new Date() },
          create: { user_id: payer.user_id, group_id, currency_code, balance: new Prisma.Decimal(payer.amount), last_update: new Date() }
        });
      }

      // 4. Decrement Balances for Splitters
      for (const split of splitRecords) {
        await tx.balances.upsert({
          where: { user_id_group_id_currency_code: { user_id: split.user_id, group_id, currency_code } },
          update: { balance: { decrement: new Prisma.Decimal(split.amount) }, last_update: new Date() },
          create: { user_id: split.user_id, group_id, currency_code, balance: new Prisma.Decimal(split.amount).neg(), last_update: new Date() }
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
    const {id} = req.params
    const expsense_split = await prisma.expense_splits.deleteMany(
      {where: {expense_id: id}}
    )

    const expense = await prisma.expenses.delete({
      where: {id:id}
    })
    
    return res.status(200).json(successResponse("Expnse delete sucessfully", expense))
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
