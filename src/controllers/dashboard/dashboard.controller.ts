import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { successResponse, errorResponse } from "../../utils/response.js";
import { simplifyDebts } from "../../services/expense.service.js";

const prisma = new PrismaClient();

// Get dashboard summary stats
export const getDashboardStats = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    // 1. Total Expenses Calculate karo (Jaise pehle tha)
    const expenses = await prisma.expenses.findMany({
      where: {
        OR: [
          { created_by: user_id },
          { paid_by: user_id },
          { expensePayments: { some: { user_id } } },
          { splitExpense: { some: { OR: [{ user_id }, { own_by: user_id }] } } },
        ],
      },
      select: { amount: true }
    });

    const totalExpenses = expenses.reduce(
      (sum, expense) => sum.plus(new Prisma.Decimal(expense.amount)),
      new Prisma.Decimal(0)
    );

    // 2. Active group memberships — reused below both to scope the balances query and to count groups.
    // FIX: previously the balances query below had no scoping at all, so a group the user had left, or
    // one that was soft-deleted, would still contribute its (stale) balance to the dashboard totals.
    const activeMemberships = await prisma.group_members.findMany({
      where: {
        user_id,
        isInGroup: true,
        group: { isDeleted: false },
      },
      select: { group_id: true },
    });
    const activeGroupIds = activeMemberships.map((m) => m.group_id);

    // 3. Net Owed & Owed To You directly Balances table se le aao (Jahan settlements already accounted hain!)
    // FIX: scoped to active, non-deleted groups only — see comment above.
    const userBalances = activeGroupIds.length
      ? await prisma.balances.findMany({
          where: { user_id, group_id: { in: activeGroupIds } },
          select: { balance: true }
        })
      : [];

    let totalOwed = new Prisma.Decimal(0);       // Kitna dena baki hai (Negative balance sum)
    let totalOwedToUser = new Prisma.Decimal(0); // Kitna milna baki hai (Positive balance sum)

    userBalances.forEach((b) => {
      const bal = new Prisma.Decimal(b.balance);
      if (bal.isNegative()) {
        totalOwed = totalOwed.plus(bal.abs());
      } else if (bal.isPositive()) {
        totalOwedToUser = totalOwedToUser.plus(bal);
      }
    });

    const stats = {
      totalExpenses: totalExpenses.toString(),
      youOwe: totalOwed.toString(),
      owedToYou: totalOwedToUser.toString(),
      activeGroups: activeGroupIds.length
    };

    return res.status(200).json(successResponse("Dashboard stats fetched successfully", stats));
  } catch (error: any) {
    console.error("Error fetching dashboard stats:", error);
    return res.status(500).json(errorResponse("Failed to fetch dashboard stats", error.message));
  }
};

// Get recent expenses
export const getRecentExpenses = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const limit = Number(req.query.limit) || 5;

  try {
    const recentExpenses = await prisma.expenses.findMany({
      where: {
        OR: [
          { created_by: user_id },
          { paid_by: user_id },
          { expensePayments: { some: { user_id } } },
          { splitExpense: { some: { OR: [{ user_id }, { own_by: user_id }] } } },
        ],
      },
      include: {
        group: {
          select: {
            id: true,
            name: true,
          },
        },
        user: {
          select: {
            id: true,
            displayName: true,
            avatarUrl: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit
    });

    return res.status(200).json(successResponse("Recent expenses fetched successfully", recentExpenses));
  } catch (error: any) {
    console.error("Error fetching recent expenses:", error);
    return res.status(500).json(errorResponse("Failed to fetch recent expenses", error.message));
  }
};

// Get active groups with balances
export const getActiveGroups = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    const activeGroups = await prisma.group_members.findMany({
      where: {
        user_id,
        isInGroup: true
      },
      include: {
        group: {
          include: {
            expenses: true,
            member: {
              where: {
                isInGroup: true
              },
              select: {
                user_id: true
              }
            }
          }
        }
      }
    });

    const groupsWithStats = await Promise.all(
      activeGroups.map(async (membership) => {
        // NOTE: still uses findFirst — if a group has expenses in more than one currency, this
        // silently returns only one of them. Flagging as-is since fixing it changes the response
        // shape (single balance -> per-currency balances); left for a follow-up if the app is
        // actually multi-currency-per-group.
        const balance = await prisma.balances.findFirst({
          where: {
            group_id: membership.group_id,
            user_id
          }
        });

        const totalExpenses = membership.group.expenses.reduce(
          (sum, expense) => sum.plus(new Prisma.Decimal(expense.amount)),
          new Prisma.Decimal(0)
        );

        return {
          id: membership.group_id,
          name: membership.group.name,
          members: membership.group.member.length,
          totalExpenses: totalExpenses.toString(),
          balance: balance ? balance.balance.toString() : "0"
        };
      })
    );

    return res.status(200).json(successResponse("Active groups fetched successfully", groupsWithStats));
  } catch (error: any) {
    console.error("Error fetching active groups:", error);
    return res.status(500).json(errorResponse("Failed to fetch active groups", error.message));
  }
};

// Get monthly spending trend
export const getMonthlySpending = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    const expenses = await prisma.expenses.findMany({
      where: {
        // FIX: every other dashboard query (stats, recent expenses) treats a user as "involved" if
        // they created it, paid it, or are a payment/split participant. This one only checked
        // created_by/paid_by, so a pure split-participant's spending never showed up here — spending
        // trend could disagree with the totals shown elsewhere on the same dashboard.
        OR: [
          { created_by: user_id },
          { paid_by: user_id },
          { expensePayments: { some: { user_id } } },
          { splitExpense: { some: { OR: [{ user_id }, { own_by: user_id }] } } },
        ],
        expense_date: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
        }
      },
      select: {
        amount: true,
        expense_date: true
      },
      orderBy: {
        expense_date: 'asc'
      }
    });

    // FIX: was keyed by short month name only ("Jan"), so if the 6-month window spans a year
    // boundary, two different years' "Jan" get merged into one bucket. Key now includes the year;
    // `label` keeps the short display name for the UI.
    const monthlySpending = expenses.reduce((acc: Record<string, { label: string; total: Prisma.Decimal }>, expense) => {
      const key = `${expense.expense_date.getFullYear()}-${String(expense.expense_date.getMonth() + 1).padStart(2, "0")}`;
      const label = expense.expense_date.toLocaleString('default', { month: 'short' });
      if (!acc[key]) {
        acc[key] = { label, total: new Prisma.Decimal(0) };
      }
      acc[key].total = acc[key].total.plus(expense.amount);
      return acc;
    }, {});

    const formattedSpending = Object.fromEntries(
      Object.entries(monthlySpending).map(([key, value]) => [key, { label: value.label, total: value.total.toString() }])
    );

    return res.status(200).json(successResponse("Monthly spending fetched successfully", formattedSpending));
  } catch (error: any) {
    console.error("Error fetching monthly spending:", error);
    return res.status(500).json(errorResponse("Failed to fetch monthly spending", error.message));
  }
};

export const getSettlements = async (req: Request, res: Response) => {
  const { group_id } = req.params;

  try {
    const members = await prisma.group_members.findMany({
      where: { group_id, isInGroup: true },
      include: {
        user: { select: { id: true, displayName: true, avatarUrl: true } },
      },
    });

    if (members.length === 0) {
      return res.status(404).json(errorResponse("No members found for this group"));
    }

    const memberMeta: Record<string, { id: string; name: string; avatar: string | null }> = {};
    members.forEach((member) => {
      memberMeta[member.user.id] = {
        id: member.user.id,
        name: member.user.displayName,
        avatar: member.user.avatarUrl,
      };
    });

    // FIX (main bug): this used to recompute debts from scratch by summing raw expense_payments and
    // expense_splits for expenses where isSettled = false. That's a redundant, parallel source of
    // truth that completely ignores the `settlements` table. A settlement recorded without an
    // expense_id (a general "pay off what I owe" settlement, not tied to one specific expense) never
    // flips any expense's isSettled flag — so the old code kept treating that debt as fully
    // outstanding even after it had actually been paid off. This now reads from the `balances` table,
    // which is the single source of truth already used by the rest of the dashboard and is kept in
    // sync by createSettlementWithBalances / recalculateGroupBalances.
    const balances = await prisma.balances.findMany({
      where: {
        group_id,
        user_id: { in: members.map((member) => member.user.id) },
      },
      select: { user_id: true, currency_code: true, balance: true },
    });

    // FIX: also currency-aware now. The old calculation summed amount_paid/exact_amount across all
    // currencies into one number, which is wrong for any group with mixed-currency expenses. Debts
    // are now simplified independently per currency.
    const balancesByCurrency = new Map<string, Array<{ user_id: string; balance: Prisma.Decimal }>>();
    balances.forEach((entry) => {
      const list = balancesByCurrency.get(entry.currency_code) ?? [];
      list.push({ user_id: entry.user_id, balance: new Prisma.Decimal(entry.balance) });
      balancesByCurrency.set(entry.currency_code, list);
    });

    const settlements: Array<{
      from: { id: string; name: string; avatar: string | null };
      to: { id: string; name: string; avatar: string | null };
      amount: string;
      currency_code: string;
    }> = [];

    for (const [currencyCode, entries] of balancesByCurrency.entries()) {
      const transactions = simplifyDebts(entries);
      transactions.forEach((transaction) => {
        settlements.push({
          from: memberMeta[transaction.fromUserId],
          to: memberMeta[transaction.toUserId],
          amount: transaction.amount.toString(),
          currency_code: currencyCode,
        });
      });
    }

    return res.status(200).json(successResponse("Settlements calculated successfully", settlements));
  } catch (error: any) {
    console.error("Error calculating settlements:", error);
    return res.status(500).json(errorResponse("Internal server error", error.message));
  }
};