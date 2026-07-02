import { Prisma } from "@prisma/client";

export type ExpenseSplitInput = {
  amount: number | string | Prisma.Decimal;
  splitType: "EQUAL_SPLIT" | "CUSTOM_SPLIT";
  paidByData: Array<{ user_id: string; amount: number | string | Prisma.Decimal }>;
  expenseData?: Array<{ user_id: string; amount?: number | string | Prisma.Decimal; percentage?: number | string | Prisma.Decimal }>;
  groupMembers?: Array<{ user_id: string }>;
};

export type ExpenseSplitPlan = {
  shareRecords: Array<{
    user_id: string;
    amount: Prisma.Decimal;
    own_by: string;
    percentage: Prisma.Decimal;
    exact_amount: Prisma.Decimal;
  }>;
  paymentRecords: Array<{
    user_id: string;
    amount: Prisma.Decimal;
    own_by: string;
    percentage: Prisma.Decimal;
    exact_amount: Prisma.Decimal;
  }>;
  balanceDeltas: Map<string, Prisma.Decimal>;
};

const toDecimal = (value: number | string | Prisma.Decimal) => new Prisma.Decimal(value);

const addDelta = (deltas: Map<string, Prisma.Decimal>, userId: string, delta: Prisma.Decimal) => {
  const current = deltas.get(userId) ?? new Prisma.Decimal(0);
  deltas.set(userId, current.plus(delta));
};

export const buildExpenseSplitPlan = ({
  amount,
  splitType,
  paidByData,
  expenseData = [],
  groupMembers = [],
}: ExpenseSplitInput): ExpenseSplitPlan => {
  const amountDecimal = toDecimal(amount);
  const balanceDeltas = new Map<string, Prisma.Decimal>();
  const shareRecords: ExpenseSplitPlan["shareRecords"] = [];
  const paymentRecords: ExpenseSplitPlan["paymentRecords"] = [];

  const addPayerRecord = (userId: string, paidAmount: Prisma.Decimal) => {
    addDelta(balanceDeltas, userId, paidAmount);
    paymentRecords.push({
      user_id: userId,
      amount: paidAmount,
      own_by: userId,
      percentage: new Prisma.Decimal(-1),
      exact_amount: paidAmount,
    });
  };

  paidByData.forEach(payer => {
    addPayerRecord(payer.user_id, toDecimal(payer.amount));
  });

  if (splitType === "EQUAL_SPLIT") {
    const memberIds = groupMembers.map(member => member.user_id);
    if (memberIds.length > 0) {
      const shareAmount = amountDecimal.div(memberIds.length);
      let remaining = amountDecimal;

      memberIds.forEach((userId, index) => {
        const isLast = index === memberIds.length - 1;
        const exactAmount = isLast ? remaining : shareAmount;
        remaining = remaining.minus(exactAmount);

        addDelta(balanceDeltas, userId, exactAmount.neg());
        shareRecords.push({
          user_id: userId,
          amount: exactAmount,
          own_by: paidByData[0]?.user_id ?? userId,
          percentage: amountDecimal.isZero() ? new Prisma.Decimal(0) : exactAmount.div(amountDecimal).mul(100),
          exact_amount: exactAmount,
        });
      });
    }
    return { shareRecords, paymentRecords, balanceDeltas };
  }

  const usesPercentage = expenseData.some(entry => entry.percentage !== undefined && entry.percentage !== null);

  expenseData.forEach(entry => {
    const exactAmount = usesPercentage
      ? amountDecimal.mul(toDecimal(entry.percentage ?? 0).div(100))
      : toDecimal(entry.amount ?? 0);

    addDelta(balanceDeltas, entry.user_id, exactAmount.neg());
    shareRecords.push({
      user_id: entry.user_id,
      amount: exactAmount,
      own_by: paidByData[0]?.user_id ?? entry.user_id,
      percentage: amountDecimal.isZero()
        ? new Prisma.Decimal(0)
        : exactAmount.div(amountDecimal).mul(100),
      exact_amount: exactAmount,
    });
  });

  return { shareRecords, paymentRecords, balanceDeltas };
};

export const buildReverseBalanceDeltas = ({
  expenseAmount,
  expensePaidBy,
  expenseSplits,
}: {
  expenseAmount: number | string | Prisma.Decimal;
  expensePaidBy: string;
  expenseSplits: Array<{ user_id: string; amount: number | string | Prisma.Decimal; percentage?: number | string | Prisma.Decimal }>;
}) => {
  const deltas = new Map<string, Prisma.Decimal>();
  const amountDecimal = toDecimal(expenseAmount);

  const addDelta = (userId: string, delta: Prisma.Decimal) => {
    const current = deltas.get(userId) ?? new Prisma.Decimal(0);
    deltas.set(userId, current.plus(delta));
  };

  const hasPaymentRows = expenseSplits.some(row => toDecimal(row.percentage ?? 0).lt(0));

  if (!hasPaymentRows) {
    addDelta(expensePaidBy, amountDecimal.neg());
    expenseSplits.forEach(row => {
      addDelta(row.user_id, toDecimal(row.amount));
    });
    return deltas;
  }

  expenseSplits.forEach(row => {
    const amount = toDecimal(row.amount);
    const isPaymentRow = toDecimal(row.percentage ?? 0).lt(0);
    addDelta(row.user_id, isPaymentRow ? amount.neg() : amount);
  });

  return deltas;
};
