import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

interface AuthenticatedRequest extends Request {
  user?: { userId: string; email: string; displayName: string };
}
import { successResponse, errorResponse } from "../../utils/response.js";
import { createExpenseSchema, createSettlementSchema } from "../../validators/expense.validator.js";
import { createExpenseWithBalances, createSettlementWithBalances, deleteExpenseWithBalances, simplifyDebts, updateExpenseWithBalances } from "../../services/expense.service";

const prisma = new PrismaClient();

export const createExpense = async (req: AuthenticatedRequest, res: Response) => {
  const validationResult = createExpenseSchema.safeParse(req.body);
  if (!validationResult.success) {
    return res.status(400).json(errorResponse("Validation error", validationResult.error.issues));
  }

  try {
    const expense = await createExpenseWithBalances({ ...validationResult.data, created_by: req.user?.userId ?? validationResult.data.created_by });
    return res.status(201).json(successResponse("Expense created and balances updated", expense));
  } catch (err: any) {
    return res.status(400).json(errorResponse(err.message || "Unable to create expense"));
  }
};

export const createSettlement = async (req: AuthenticatedRequest, res: Response) => {
  const validationResult = createSettlementSchema.safeParse(req.body);

  if (!validationResult.success) {
    return res.status(400).json(errorResponse("Validation error", validationResult.error.issues));
  }

  if (req.user?.userId && validationResult.data.from_user_id !== req.user.userId) {
    return res.status(403).json(errorResponse("You are not authorized to settle for another user"));
  }

  try {
    const settlement = await createSettlementWithBalances(validationResult.data);
    return res.status(201).json(successResponse("Balance settled successfully", settlement));
  } catch (error: any) {
    return res.status(400).json(errorResponse(error.message || "Unable to create settlement"));
  }
};

export const updateExpense = async (req: AuthenticatedRequest, res: Response) => {
  const validationResult = createExpenseSchema.safeParse(req.body);
  if (!validationResult.success) {
    return res.status(400).json(errorResponse("Validation error", validationResult.error.issues));
  }

  try {
    const existingExpense = await prisma.expenses.findUnique({ where: { id: req.params.id } });
    if (!existingExpense) {
      return res.status(404).json(errorResponse("Expense not found"));
    }
    if (existingExpense.created_by !== req.user?.userId) {
      return res.status(403).json(errorResponse("You are not authorized to update this expense"));
    }

    const expense = await updateExpenseWithBalances({ ...validationResult.data, created_by: req.user?.userId ?? validationResult.data.created_by, id: req.params.id });
    return res.status(200).json(successResponse("Expense updated and balances recalculated", expense));
  } catch (error: any) {
    return res.status(400).json(errorResponse(error.message || "Unable to update expense"));
  }
};

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
    return res.status(500).json(errorResponse("Internal server error", error.message));
  }
};

export const getSimplifiedDebts = async (req: Request, res: Response) => {
  const { group_id } = req.params;

  try {
    const balances = await prisma.balances.findMany({
      where: { group_id },
      select: { user_id: true, balance: true },
    });

    const simplifiedTransactions = simplifyDebts(balances.map((entry) => ({ user_id: entry.user_id, balance: entry.balance }))); 

    return res.status(200).json(successResponse("Debt simplification completed", simplifiedTransactions));
  } catch (error: any) {
    return res.status(500).json(errorResponse("Internal server error", error.message));
  }
};

export const getExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const expense = await prisma.expenses.findFirst({
      where: { id },

      include: {
        expensePayments: {
          include: {
            user: {
              select: {
                id: true,
                displayName: true,
                avatarUrl: true,
              },
            },
          },
        },

        splitExpense: {
          include: {
            splitUserId: {
              select: {
                id: true,
                displayName: true,
                avatarUrl: true,
              },
            },

            splitOwner: {
              select: {
                id: true,
                displayName: true,
                avatarUrl: true,
              },
            },
          },
        },

        paid: {
          select: {
            id: true,
            displayName: true,
            avatarUrl: true,
          },
        },
      },
    });


    if (!expense) {
      return res.status(404).json(errorResponse("Expense not found"));
    }


    return res.status(200).json(
      successResponse(
        "Expense fetched successfully",
        expense
      )
    );

  } catch (error) {
    console.log(error);
    return res.status(500).json(errorResponse("Internal server error"));
  }
};

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await prisma.expenses.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(successResponse("Expenses fetched successfully", expenses));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error"));
  }
};

export const deleteExpense = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const expense = await prisma.expenses.findUnique({ where: { id } });
    if (!expense) {
      return res.status(404).json(errorResponse("Expense not found"));
    }
    if (expense.created_by !== req.user?.userId) {
      return res.status(403).json(errorResponse("You are not authorized to delete this expense"));
    }
    await deleteExpenseWithBalances(id);

    return res.status(200).json(successResponse("Expense deleted successfully", { id }));
  } catch (error: any) {
    return res.status(400).json(errorResponse(error.message || "Unable to delete expense"));
  }
};
