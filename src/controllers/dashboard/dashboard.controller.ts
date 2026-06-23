import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { successResponse, errorResponse } from "../../utils/response";

const prisma = new PrismaClient();

// Get dashboard summary stats
export const getDashboardStats = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    // Get total expenses
    const expenses = await prisma.expenses.findMany({
      where: {
        OR: [
          { created_by: user_id },
          { paid_by: user_id }
        ]
      }
    });
    
    // Calculate total expenses
    const totalExpenses = expenses.reduce((sum, expense) => 
      sum.plus(new Prisma.Decimal(expense.amount)), 
      new Prisma.Decimal(0)
    );

    // Get user balances across all groups
    const balances = await prisma.balances.findMany({
      where: { user_id }
    });

    // Calculate amounts owed and owed to user based on expense splits
    let totalOwed = new Prisma.Decimal(0);
    let totalOwedToUser = new Prisma.Decimal(0);

    // Get all expense splits involving the user
    const expenseSplits = await prisma.expense_splits.findMany({
      where: {
        OR: [
          { user_id },
          { own_by: user_id }
        ]
      }
    });

    // Calculate net balances excluding self-splits
    expenseSplits.forEach(split => {
      // Skip if it's a self-split (same user is paying and receiving)
      if (split.user_id === split.own_by) {
        return;
      }
      
      const splitAmount = new Prisma.Decimal(split.exact_amount);
      
      if (split.user_id === user_id) {
        // Amount user owes to others
        totalOwed = totalOwed.plus(splitAmount);
      }
      
      if (split.own_by === user_id) {
        // Amount others owe to user
        totalOwedToUser = totalOwedToUser.plus(splitAmount);
      }
    });

    // Ensure balances are not negative
    totalOwed = totalOwed.isNegative() ? new Prisma.Decimal(0) : totalOwed;
    totalOwedToUser = totalOwedToUser.isNegative() ? new Prisma.Decimal(0) : totalOwedToUser;

    // Get active groups count
    const activeGroups = await prisma.group_members.count({
      where: {
        user_id,
        isInGroup: true
      }
    });

    const stats = {
      totalExpenses: totalExpenses.toString(),
      youOwe: totalOwed.toString(),
      owedToYou: totalOwedToUser.toString(),
      activeGroups
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
          { paid_by: user_id }
        ]
      },
      include: {
        group: {
          select: {
            name: true
          }
        },
        user: {
          select: {
            displayName: true,
            avatarUrl: true
          }
        }
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
        OR: [
          { created_by: user_id },
          { paid_by: user_id }
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

    const monthlySpending = expenses.reduce((acc: any, expense) => {
      const month = expense.expense_date.toLocaleString('default', { month: 'short' });
      if (!acc[month]) {
        acc[month] = new Prisma.Decimal(0);
      }
      acc[month] = acc[month].plus(expense.amount);
      return acc;
    }, {});

    return res.status(200).json(successResponse("Monthly spending fetched successfully", monthlySpending));
  } catch (error: any) {
    console.error("Error fetching monthly spending:", error);
    return res.status(500).json(errorResponse("Failed to fetch monthly spending", error.message));
  }
};

// export const getSettlements = async (req: Request, res: Response) => {
//   const { group_id } = req.params;

//   try {
//     const balances = await prisma.balances.findMany({
//       where: { group_id },
//       include: {
//         userBalances: {
//           select: { displayName: true, avatarUrl: true },
//         },
//       },
//     });

//     if (balances.length === 0) {
//       return res.status(404).json(errorResponse("No balances found for this group"));
//     }

//     // separate
//     let debtors = balances
//       .filter((b) => new Prisma.Decimal(b.balance).isNegative())
//       .map((b) => ({
//         user_id: b.user_id,
//         balance: new Prisma.Decimal(b.balance),
//         userInfo: b.userBalances,
//       }));

//     let creditors = balances
//       .filter((b) => new Prisma.Decimal(b.balance).isPositive())
//       .map((b) => ({
//         user_id: b.user_id,
//         balance: new Prisma.Decimal(b.balance),
//         userInfo: b.userBalances,
//       }));

//     const settlements: any[] = [];
//     let i = 0,
//       j = 0;

//     while (i < debtors.length && j < creditors.length) {
//       const debtor = debtors[i];
//       const creditor = creditors[j];

//       const settleAmount = Prisma.Decimal.min(
//         debtor.balance.abs(),
//         creditor.balance
//       );

//       if (settleAmount.isPositive()) {
//         settlements.push({
//           from: {
//             id: debtor.user_id,
//             name: debtor.userInfo?.displayName || "Unknown",
//             avatar: debtor.userInfo?.avatarUrl || "",
//           },
//           to: {
//             id: creditor.user_id,
//             name: creditor.userInfo?.displayName || "Unknown",
//             avatar: creditor.userInfo?.avatarUrl || "",
//           },
//           amount: settleAmount.toString(),
//         });

//         debtor.balance = debtor.balance.plus(settleAmount);
//         creditor.balance = creditor.balance.minus(settleAmount);
//       }

//       if (debtor.balance.isZero() || debtor.balance.isPositive()) i++;
//       if (creditor.balance.isZero() || creditor.balance.isNegative()) j++;
//     }

//     return res
//       .status(200)
//       .json(successResponse("Settlements calculated successfully", settlements));
//   } catch (error: any) {
//     console.error("Error calculating settlements:", error);
//     return res
//       .status(500)
//       .json(errorResponse("Internal server error", error.message));
//   }
// };


export const getSettlements = async (req: Request, res: Response) => {
  const { group_id } = req.params;
  console.log(group_id, "trying to find id")

  try {
    // Step 1: Fetch members of the group
    const members = await prisma.group_members.findMany({
      where: { group_id, isInGroup: true },
      include: {
        user: { select: { id: true, displayName: true, avatarUrl: true } },
      },
    });

    if (members.length === 0) {
      return res.status(404).json(errorResponse("No members found for this group"));
    }

    const memberIds = members.map((m) => m.user.id);

    // Step 2: Fetch all expenses in the group
    const expenses = await prisma.expenses.findMany({
      where: { group_id },
      select: {
        amount: true,
        paid_by: true,
      },
    });

    if (expenses.length === 0) {
      return res.status(200).json(successResponse("No expenses found", []));
    }

    // Step 3: Calculate total amount paid per user
    const userPaidMap: Record<string, Prisma.Decimal> = {};
    memberIds.forEach((id) => (userPaidMap[id] = new Prisma.Decimal(0)));

    let totalAmount = new Prisma.Decimal(0);
    for (const expense of expenses) {
      totalAmount = totalAmount.plus(expense.amount);
      userPaidMap[expense.paid_by] = userPaidMap[expense.paid_by].plus(expense.amount);
    }

    // Step 4: Calculate per-member share
    const sharePerMember = totalAmount.div(memberIds.length);

    // Step 5: Calculate how much each member should give/receive
    const settlements = members.map((m) => {
      const netAmount = sharePerMember.minus(userPaidMap[m.user.id]); // Positive = owes, Negative = already overpaid
      return {
        user: {
          id: m.user.id,
          name: m.user.displayName,
          avatar: m.user.avatarUrl,
        },
        amountToSettle: netAmount.toString(), // Positive → pay, Negative → receive
      };
    });

    return res.status(200).json(successResponse("Settlements calculated successfully", settlements));
  } catch (error: any) {
    console.error("Error calculating settlements:", error);
    return res.status(500).json(errorResponse("Internal server error", error.message));
  }
};