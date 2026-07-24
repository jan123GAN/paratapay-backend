import { Prisma, PrismaClient } from "@prisma/client";

export type SplitType = "EQUAL_SPLIT" | "PERCENTAGE_SPLIT" | "EXACT_AMOUNT_SPLIT";

export interface ExpenseSplitPlanInput {
  amount: Prisma.Decimal;
  groupMembers: Array<{ user_id: string }>;
  splitType: SplitType;
  payerUserId?: string;
  expenseData?: Array<{ user_id: string; amount?: number; percentage?: number }>;
}

export interface ExpenseSplitRecord {
  user_id: string;
  amount: Prisma.Decimal;
  own_by: string | null;
  percentage: Prisma.Decimal;
  exact_amount: Prisma.Decimal;
}

export interface ExpenseSplitPlan {
  records: ExpenseSplitRecord[];
  payerAmount: Prisma.Decimal;
}

interface BalanceEntry {
  user_id: string;
  balance: Prisma.Decimal;
}

export interface CreateExpenseInput {
  group_id: string;
  created_by: string;
  amount: number;
  currency_code: string;
  split_type: string;
  expense_date: Date | string;
  paid_by?: string;
  paid_by_data?: Array<{ user_id: string; amount: number }>;
  expense_data?: Array<{ user_id: string; amount?: number; percentage?: number }>;
  description: string;
  category: string;
}

export interface UpdateExpenseInput extends CreateExpenseInput {
  id: string;
}

export interface PayerEntry {
  user_id: string;
  amount: number;
}

const prisma = new PrismaClient();
const decimal = (value: number | string | Prisma.Decimal) => new Prisma.Decimal(value);
const toTwoDecimalPlaces = (value: Prisma.Decimal) => value.toDecimalPlaces(2, Prisma.Decimal.ROUND_HALF_UP);

const runInTransaction = async <T>(
  client: PrismaClient | Prisma.TransactionClient,
  work: (tx: Prisma.TransactionClient) => Promise<T>
): Promise<T> => {
  if (client instanceof PrismaClient) {
    return client.$transaction(async (tx) => work(tx));
  }
  return work(client);
};

const normalizeSplitType = (value: string): SplitType => {
  switch (value) {
    case "EQUAL_SPLIT":
      return "EQUAL_SPLIT";
    case "PERCENTAGE_SPLIT":
      return "PERCENTAGE_SPLIT";
    case "EXACT_AMOUNT_SPLIT":
    case "CUSTOM_SPLIT":
      return "EXACT_AMOUNT_SPLIT";
    default:
      throw new Error("Unsupported split type.");
  }
};

export const normalizePayerEntries = ({
  amount,
  paidBy,
  paidByData,
}: {
  amount: number;
  paidBy?: string;
  paidByData?: Array<PayerEntry>;
}): PayerEntry[] => {
  const fallbackEntries = paidBy ? [{ user_id: paidBy, amount }] : [];
  const payerEntries = (paidByData?.length ? paidByData : fallbackEntries).filter((entry) => entry.user_id);

  if (!payerEntries.length) {
    throw new Error("At least one payer is required.");
  }

  const duplicatePayers = payerEntries.filter((entry, index) => payerEntries.findIndex((other) => other.user_id === entry.user_id) !== index);
  if (duplicatePayers.length) {
    throw new Error(`Duplicate payer entries found for users: ${duplicatePayers.map((entry) => entry.user_id).join(", ")}.`);
  }

  const payerTotal = payerEntries.reduce((sum, entry) => sum.plus(decimal(entry.amount)), decimal(0));
  if (!payerTotal.equals(decimal(amount))) {
    throw new Error("The total payer contribution must equal the expense amount.");
  }

  return payerEntries;
};

export const buildExpenseSplitPlan = ({
  amount,
  groupMembers,
  splitType,
  payerUserId,
  expenseData = [],
}: ExpenseSplitPlanInput): ExpenseSplitPlan => {
  if (!amount || amount.isNegative()) {
    throw new Error("Expense amount must be a positive number.");
  }

  if (!groupMembers.length) {
    throw new Error("At least one active group member is required.");
  }

  const memberIds = groupMembers.map((member) => member.user_id);
  const seenUsers = new Set<string>();

  const buildRecord = (userId: string, splitAmount: Prisma.Decimal, splitPercentage: Prisma.Decimal) => {
    if (seenUsers.has(userId)) {
      throw new Error(`Duplicate split entry found for user ${userId}.`);
    }
    seenUsers.add(userId);

    return {
      user_id: userId,
      amount: splitAmount,
      own_by: null,
      percentage: splitPercentage,
      exact_amount: splitAmount,
    } satisfies ExpenseSplitRecord;
  };

  if (splitType === "EQUAL_SPLIT") {
    const share = amount.div(groupMembers.length);
    const roundedShare = toTwoDecimalPlaces(share);
    let remaining = amount;
    const records = groupMembers.map((member, index) => {
      const isLast = index === groupMembers.length - 1;
      const exactAmount = isLast ? remaining : roundedShare;
      const roundedAmount = toTwoDecimalPlaces(exactAmount);
      remaining = remaining.minus(roundedAmount);
      return buildRecord(
        member.user_id,
        roundedAmount,
        amount.isZero() ? new Prisma.Decimal(0) : toTwoDecimalPlaces(roundedAmount.div(amount).mul(100))
      );
    });

    const total = records.reduce((sum, record) => sum.plus(record.amount), new Prisma.Decimal(0));
    if (!total.equals(amount)) {
      const lastRecord = records[records.length - 1];
      if (lastRecord) {
        const adjustment = amount.minus(total);
        lastRecord.amount = lastRecord.amount.plus(adjustment);
        lastRecord.percentage = toTwoDecimalPlaces(lastRecord.amount.div(amount).mul(100));
        lastRecord.exact_amount = lastRecord.amount;
      }
    }

    return { records, payerAmount: amount };
  }

  const providedEntries = expenseData.filter((item) => item.user_id);
  const providedUserIds = providedEntries.map((item) => item.user_id);
  const duplicateUserIds = providedUserIds.filter((userId, index) => providedUserIds.indexOf(userId) !== index);
  if (duplicateUserIds.length) {
    throw new Error(`Duplicate split entries found for users: ${duplicateUserIds.join(", ")}.`);
  }

  const invalidUsers = providedEntries.filter((item) => !memberIds.includes(item.user_id));
  if (invalidUsers.length) {
    throw new Error(`Split entries include users who are not active group members: ${invalidUsers.map((item) => item.user_id).join(", ")}.`);
  }

  const missingUsers = memberIds.filter((memberId) => !providedUserIds.includes(memberId));
  if (missingUsers.length) {
    throw new Error(`Missing split entries for active group members: ${missingUsers.join(", ")}.`);
  }

  if (splitType === "PERCENTAGE_SPLIT") {
    for (const entry of providedEntries) {
      if (entry.percentage === undefined || entry.percentage === null) {
        throw new Error(`Percentage split requires a percentage for user ${entry.user_id}.`);
      }
      if (entry.percentage <= 0) {
        throw new Error(`Percentage for user ${entry.user_id} must be greater than zero.`);
      }
    }

    const totalPercentage = providedEntries.reduce((sum, item) => sum.plus(decimal(item.percentage ?? 0)), decimal(0));
    if (!totalPercentage.equals(100)) {
      throw new Error("Percentages must total exactly 100%.");
    }

    const records = memberIds.map((userId) => {
      const entry = providedEntries.find((item) => item.user_id === userId);
      const percentage = decimal(entry?.percentage ?? 0);
      const amountForMember = amount.mul(percentage).div(100);
      const roundedAmount = toTwoDecimalPlaces(amountForMember);
      return buildRecord(userId, roundedAmount, toTwoDecimalPlaces(percentage));
    });

    const total = records.reduce((sum, record) => sum.plus(record.amount), new Prisma.Decimal(0));
    if (!total.equals(amount)) {
      const lastRecord = records[records.length - 1];
      if (lastRecord) {
        const adjustment = amount.minus(total);
        lastRecord.amount = lastRecord.amount.plus(adjustment);
        lastRecord.percentage = toTwoDecimalPlaces(lastRecord.amount.div(amount).mul(100));
        lastRecord.exact_amount = lastRecord.amount;
      }
    }

    return { records, payerAmount: amount };
  }

  if (splitType === "EXACT_AMOUNT_SPLIT") {
    for (const entry of providedEntries) {
      if (entry.amount === undefined || entry.amount === null) {
        throw new Error(`Exact split requires an amount for user ${entry.user_id}.`);
      }
      if (entry.amount < 0) {
        throw new Error(`Exact split amount for user ${entry.user_id} cannot be negative.`);
      }
      if (entry.amount === 0) {
        throw new Error(`Exact split amount for user ${entry.user_id} must be greater than zero.`);
      }
      if (decimal(entry.amount).greaterThan(amount)) {
        throw new Error(`Exact split amount for user ${entry.user_id} cannot exceed the expense total.`);
      }
    }

    const totalSplitAmount = providedEntries.reduce((sum, item) => sum.plus(decimal(item.amount ?? 0)), decimal(0));
    if (!totalSplitAmount.equals(amount)) {
      throw new Error("Exact split amounts must equal the total expense amount.");
    }

    const records = memberIds.map((userId) => {
      const entry = providedEntries.find((item) => item.user_id === userId);
      const exactAmount = decimal(entry?.amount ?? 0);
      return buildRecord(
        userId,
        exactAmount,
        amount.isZero() ? new Prisma.Decimal(0) : toTwoDecimalPlaces(exactAmount.div(amount).mul(100))
      );
    });

    return { records, payerAmount: amount };
  }

  throw new Error("Unsupported split type.");
};

const buildBalanceEffectsMap = (entries: Array<{ user_id: string; amount: Prisma.Decimal }>, operation: "apply" | "reverse" = "apply") => {
  const balanceEffects = new Map<string, Prisma.Decimal>();

  for (const entry of entries) {
    const currentBalance = balanceEffects.get(entry.user_id) ?? decimal(0);
    const delta = operation === "reverse" ? currentBalance.minus(entry.amount) : currentBalance.plus(entry.amount);
    balanceEffects.set(entry.user_id, delta);
  }

  return balanceEffects;
};

export const buildExpenseBalanceEffects = ({
  payments,
  splits,
  operation = "apply",
}: {
  payments: Array<{ user_id: string; amount_paid: Prisma.Decimal | number }>;
  splits: Array<{ user_id: string; amount: Prisma.Decimal | number }>;
  operation?: "apply" | "reverse";
}) => {
  const balanceEffects = new Map<string, Prisma.Decimal>();

  for (const payment of payments) {
    const currentBalance = balanceEffects.get(payment.user_id) ?? decimal(0);
    const amount = decimal(payment.amount_paid);
    const nextBalance = operation === "reverse" ? currentBalance.minus(amount) : currentBalance.plus(amount);
    balanceEffects.set(payment.user_id, nextBalance);
  }

  for (const split of splits) {
    const currentBalance = balanceEffects.get(split.user_id) ?? decimal(0);
    const amount = decimal(split.amount);
    const nextBalance = operation === "reverse" ? currentBalance.plus(amount) : currentBalance.minus(amount);
    balanceEffects.set(split.user_id, nextBalance);
  }

  return balanceEffects;
};

const applyBalanceEffects = async (
  tx: Prisma.TransactionClient,
  balanceEffects: Map<string, Prisma.Decimal>,
  groupId: string,
  currencyCode: string
) => {
  await Promise.all(
    Array.from(balanceEffects.entries()).map(async ([userId, balanceDelta]) => {
      await tx.balances.upsert({
        where: { user_id_group_id_currency_code: { user_id: userId, group_id: groupId, currency_code: currencyCode } },
        update: { balance: { increment: balanceDelta }, last_update: new Date() },
        create: { user_id: userId, group_id: groupId, currency_code: currencyCode, balance: balanceDelta, last_update: new Date() },
      });
    })
  );
};

export const buildGroupBalanceMap = ({
  expenses,
  expensePayments,
  expenseSplits,
}: {
  expenses: Array<{ id: string; group_id: string; currency_code: string }>;
  expensePayments: Array<{ expense_id: string; user_id: string; amount_paid: Prisma.Decimal | number }>;
  expenseSplits: Array<{ expense_id: string; user_id: string; amount: Prisma.Decimal | number }>;
}) => {
  const balanceMap = new Map<string, Prisma.Decimal>();

  for (const expense of expenses) {
    const expensePaymentsForExpense = expensePayments.filter((payment) => payment.expense_id === expense.id);
    const expenseSplitsForExpense = expenseSplits.filter((split) => split.expense_id === expense.id);

    for (const payment of expensePaymentsForExpense) {
      const key = `${payment.user_id}:${expense.currency_code}`;
      const currentBalance = balanceMap.get(key) ?? decimal(0);
      balanceMap.set(key, currentBalance.plus(decimal(payment.amount_paid)));
    }

    for (const split of expenseSplitsForExpense) {
      const key = `${split.user_id}:${expense.currency_code}`;
      const currentBalance = balanceMap.get(key) ?? decimal(0);
      balanceMap.set(key, currentBalance.minus(decimal(split.amount)));
    }
  }

  return balanceMap;
};

export const recalculateGroupBalances = async (groupId: string, client: PrismaClient | Prisma.TransactionClient = prisma) => {
  return runInTransaction(client, async (tx) => {
    await tx.balances.deleteMany({ where: { group_id: groupId } });

    const expenses = await tx.expenses.findMany({ where: { group_id: groupId } });
    const expensePayments = await tx.expense_payments.findMany({ where: { expense: { group_id: groupId } } });
    const expenseSplits = await tx.expense_splits.findMany({ where: { expenseId: { group_id: groupId } } });

    const balanceMap = buildGroupBalanceMap({ expenses, expensePayments, expenseSplits });

    await Promise.all(
      Array.from(balanceMap.entries()).map(async ([key, balance]) => {
        const [userId, currencyCode] = key.split(":");
        await tx.balances.create({
          data: {
            user_id: userId,
            group_id: groupId,
            currency_code: currencyCode,
            balance,
            last_update: new Date(),
          },
        });
      })
    );

    return true;
  });
};

const validateExpenseLedgerInput = async (
  tx: Prisma.TransactionClient,
  input: {
    group_id: string;
    created_by: string;
    currency_code: string;
    paid_by?: string;
    paid_by_data?: Array<{ user_id: string; amount: number }>;
    expense_data?: Array<{ user_id: string; amount?: number; percentage?: number }>;
  },
  payerEntries: PayerEntry[]
) => {
  const group = await tx.groups.findUnique({ where: { id: input.group_id }, select: { id: true, isDeleted: true } });
  if (!group || group.isDeleted) {
    throw new Error("Group not found.");
  }

  const currency = await tx.currencies.findFirst({ where: { code: input.currency_code, isDeleted: false } });
  if (!currency) {
    throw new Error("Currency code not found.");
  }

  const creator = await tx.users.findUnique({ where: { id: input.created_by }, select: { id: true, isDeleted: true } });
  if (!creator || creator.isDeleted) {
    throw new Error("Creator user not found.");
  }

  const activeMembers = await tx.group_members.findMany({
    where: { group_id: input.group_id, isInGroup: true },
    select: { user_id: true },
  });

  const memberIds = new Set(activeMembers.map((member) => member.user_id));
  if (!memberIds.has(input.created_by)) {
    throw new Error("Creator user is not a member of this group.");
  }

  for (const payer of payerEntries) {
    const user = await tx.users.findUnique({ where: { id: payer.user_id }, select: { id: true, isDeleted: true } });
    if (!user || user.isDeleted) {
      throw new Error(`Payer user ${payer.user_id} not found.`);
    }
    if (!memberIds.has(payer.user_id)) {
      throw new Error(`Payer user ${payer.user_id} is not a member of this group.`);
    }
  }

  for (const entry of input.expense_data ?? []) {
    const user = await tx.users.findUnique({ where: { id: entry.user_id }, select: { id: true, isDeleted: true } });
    if (!user || user.isDeleted) {
      throw new Error(`Split user ${entry.user_id} not found.`);
    }
    if (!memberIds.has(entry.user_id)) {
      throw new Error(`Split user ${entry.user_id} is not a member of this group.`);
    }
  }
};

export const createExpenseWithBalances = async (input: CreateExpenseInput, client: PrismaClient | Prisma.TransactionClient = prisma) => {
  const amountDecimal = decimal(input.amount);
  const normalizedSplitType = normalizeSplitType(input.split_type);

  const groupMembers = await client.group_members.findMany({
    where: { group_id: input.group_id, isInGroup: true },
    select: { user_id: true },
  });

  if (!groupMembers.length) {
    throw new Error("No active group members found for this group.");
  }

  const payerEntries = normalizePayerEntries({
    amount: input.amount,
    paidBy: input.paid_by,
    paidByData: input.paid_by_data,
  });

  const plan = buildExpenseSplitPlan({
    amount: amountDecimal,
    groupMembers,
    splitType: normalizedSplitType,
    expenseData: input.expense_data ?? [],
  });

  return runInTransaction(client, async (tx) => {
    await validateExpenseLedgerInput(tx, input, payerEntries);
    const expense = await tx.expenses.create({
      data: {
        group_id: input.group_id,
        created_by: input.created_by,
        paid_by: payerEntries[0]?.user_id ?? input.paid_by ?? "",
        amount: amountDecimal,
        description: input.description,
        category: input.category,
        currency_code: input.currency_code,
        expense_date: input.expense_date,
        split_type: normalizedSplitType,
      },
    });

    await tx.expense_payments.createMany({
      data: payerEntries.map((entry) => ({ expense_id: expense.id, user_id: entry.user_id, amount_paid: decimal(entry.amount) })),
    });

    await tx.expense_splits.createMany({
      data: plan.records.map((record) => ({ ...record, expense_id: expense.id })),
    });

    const balanceEffects = buildExpenseBalanceEffects({
      payments: payerEntries.map((entry) => ({ user_id: entry.user_id, amount_paid: decimal(entry.amount) })),
      splits: plan.records.map((record) => ({ user_id: record.user_id, amount: record.amount })),
    });

    await applyBalanceEffects(tx, balanceEffects, input.group_id, input.currency_code);

    return expense;
  });
};

export const updateExpenseWithBalances = async (input: UpdateExpenseInput, client: PrismaClient | Prisma.TransactionClient = prisma) => {
  const amountDecimal = decimal(input.amount);
  const normalizedSplitType = normalizeSplitType(input.split_type);

  return runInTransaction(client, async (tx) => {
    const existingExpense = await tx.expenses.findUnique({ where: { id: input.id } });
    if (!existingExpense) {
      throw new Error("Expense not found.");
    }

    const groupMembers = await tx.group_members.findMany({
      where: { group_id: input.group_id, isInGroup: true },
      select: { user_id: true },
    });

    if (!groupMembers.length) {
      throw new Error("No active group members found for this group.");
    }

    const payerEntries = normalizePayerEntries({
      amount: input.amount,
      paidBy: input.paid_by,
      paidByData: input.paid_by_data,
    });

    const plan = buildExpenseSplitPlan({
      amount: amountDecimal,
      groupMembers,
      splitType: normalizedSplitType,
      expenseData: input.expense_data ?? [],
    });

    await validateExpenseLedgerInput(tx, input, payerEntries);

    const existingPayments = await tx.expense_payments.findMany({ where: { expense_id: input.id } });
    const existingSplits = await tx.expense_splits.findMany({ where: { expense_id: input.id } });

    const reverseEffects = buildExpenseBalanceEffects({
      payments: existingPayments.map((payment) => ({ user_id: payment.user_id, amount_paid: payment.amount_paid })),
      splits: existingSplits.map((split) => ({ user_id: split.user_id, amount: split.amount })),
      operation: "reverse",
    });

    await applyBalanceEffects(tx, reverseEffects, existingExpense.group_id, existingExpense.currency_code);

    await tx.expense_payments.deleteMany({ where: { expense_id: input.id } });
    await tx.expense_splits.deleteMany({ where: { expense_id: input.id } });

    const expense = await tx.expenses.update({
      where: { id: input.id },
      data: {
        group_id: input.group_id,
        created_by: input.created_by,
        paid_by: payerEntries[0]?.user_id ?? input.paid_by ?? existingExpense.paid_by,
        amount: amountDecimal,
        description: input.description,
        category: input.category,
        currency_code: input.currency_code,
        expense_date: input.expense_date,
        split_type: normalizedSplitType,
      },
    });

    await tx.expense_payments.createMany({
      data: payerEntries.map((entry) => ({ expense_id: expense.id, user_id: entry.user_id, amount_paid: decimal(entry.amount) })),
    });

    await tx.expense_splits.createMany({
      data: plan.records.map((record) => ({ ...record, expense_id: expense.id })),
    });

    const nextEffects = buildExpenseBalanceEffects({
      payments: payerEntries.map((entry) => ({ user_id: entry.user_id, amount_paid: decimal(entry.amount) })),
      splits: plan.records.map((record) => ({ user_id: record.user_id, amount: record.amount })),
    });

    await applyBalanceEffects(tx, nextEffects, input.group_id, input.currency_code);

    return expense;
  });
};

export const deleteExpenseWithBalances = async (expenseId: string, client: PrismaClient | Prisma.TransactionClient = prisma) => {
  return runInTransaction(client, async (tx) => {
    const expense = await tx.expenses.findUnique({ where: { id: expenseId } });
    if (!expense) {
      throw new Error("Expense not found.");
    }

    const expensePayments = await tx.expense_payments.findMany({ where: { expense_id: expenseId } });
    const expenseSplits = await tx.expense_splits.findMany({ where: { expense_id: expenseId } });

    const balanceEffects = buildExpenseBalanceEffects({
      payments: expensePayments.map((payment) => ({ user_id: payment.user_id, amount_paid: payment.amount_paid })),
      splits: expenseSplits.map((split) => ({ user_id: split.user_id, amount: split.amount })),
      operation: "reverse",
    });

    await applyBalanceEffects(tx, balanceEffects, expense.group_id, expense.currency_code);

    await tx.expense_payments.deleteMany({ where: { expense_id: expenseId } });
    await tx.expense_splits.deleteMany({ where: { expense_id: expenseId } });
    await tx.expenses.delete({ where: { id: expenseId } });

    return true;
  });
};
export const createSettlementWithBalances = async (
  input: {
    group_id: string;
    from_user_id: string;
    to_user_id: string;
    amount: number;
    currency_code: string;
    method: string;
  },
  client: PrismaClient | Prisma.TransactionClient = prisma
) => {
  const amountDecimal = decimal(input.amount);

  return runInTransaction(client, async (tx) => {
    // Group validation
    const group = await tx.groups.findUnique({
      where: { id: input.group_id },
      select: { id: true, isDeleted: true },
    });

    if (!group || group.isDeleted) {
      throw new Error("Group not found.");
    }

    // Currency validation
    const currency = await tx.currencies.findFirst({
      where: {
        code: input.currency_code,
        isDeleted: false,
      },
    });

    if (!currency) {
      throw new Error("Currency not found.");
    }

    // User validation
    const [fromUser, toUser] = await Promise.all([
      tx.users.findUnique({
        where: { id: input.from_user_id },
        select: { id: true, isDeleted: true },
      }),
      tx.users.findUnique({
        where: { id: input.to_user_id },
        select: { id: true, isDeleted: true },
      }),
    ]);

    if (!fromUser || fromUser.isDeleted) {
      throw new Error("Sender not found.");
    }

    if (!toUser || toUser.isDeleted) {
      throw new Error("Receiver not found.");
    }

    // Membership validation
    const [fromMember, toMember] = await Promise.all([
      tx.group_members.findFirst({
        where: {
          group_id: input.group_id,
          user_id: input.from_user_id,
          isInGroup: true,
        },
      }),
      tx.group_members.findFirst({
        where: {
          group_id: input.group_id,
          user_id: input.to_user_id,
          isInGroup: true,
        },
      }),
    ]);

    if (!fromMember || !toMember) {
      throw new Error("Both users must belong to the group.");
    }

    // Current balances
    const [fromBalance, toBalance] = await Promise.all([
      tx.balances.findUnique({
        where: {
          user_id_group_id_currency_code: {
            user_id: input.from_user_id,
            group_id: input.group_id,
            currency_code: input.currency_code,
          },
        },
      }),

      tx.balances.findUnique({
        where: {
          user_id_group_id_currency_code: {
            user_id: input.to_user_id,
            group_id: input.group_id,
            currency_code: input.currency_code,
          },
        },
      }),
    ]);

    if (!fromBalance || !toBalance) {
      throw new Error("Balance records not found.");
    }

    // Sender must be debtor
    if (!fromBalance.balance.isNegative()) {
      throw new Error("Sender has no pending debt.");
    }

    // Receiver must be creditor
    if (!toBalance.balance.isPositive()) {
      throw new Error("Receiver has no pending credit.");
    }

    // Settlement amount validation
    const maxPossible = Prisma.Decimal.min(
      fromBalance.balance.abs(),
      toBalance.balance
    );

    if (amountDecimal.greaterThan(maxPossible)) {
      throw new Error("Settlement amount exceeds pending balance.");
    }

    // Create settlement record
    const settlement = await tx.settlements.create({
      data: {
        group_id: input.group_id,
        from_user_id: input.from_user_id,
        to_user_id: input.to_user_id,
        amount: amountDecimal,
        currency_code: input.currency_code,
        method: input.method as any,
        status: "SUCUSS", // your enum
        settled_at: new Date(),
      },
    });

    // Debtor balance increases toward zero
    await tx.balances.update({
      where: {
        user_id_group_id_currency_code: {
          user_id: input.from_user_id,
          group_id: input.group_id,
          currency_code: input.currency_code,
        },
      },
      data: {
        balance: {
          increment: amountDecimal,
        },
        last_update: new Date(),
      },
    });

    // Creditor balance decreases toward zero
    await tx.balances.update({
      where: {
        user_id_group_id_currency_code: {
          user_id: input.to_user_id,
          group_id: input.group_id,
          currency_code: input.currency_code,
        },
      },
      data: {
        balance: {
          decrement: amountDecimal,
        },
        last_update: new Date(),
      },
    });

    return settlement;
  });
};
export const simplifyDebts = (balances: BalanceEntry[]) => {
  const positive = balances.filter((entry) => entry.balance.greaterThan(0)).map((entry) => ({
    user_id: entry.user_id,
    balance: entry.balance,
  }));
  const negative = balances.filter((entry) => entry.balance.lessThan(0)).map((entry) => ({
    user_id: entry.user_id,
    balance: entry.balance.abs(),
  }));

  const transactions: Array<{ fromUserId: string; toUserId: string; amount: Prisma.Decimal }> = [];

  let positiveIndex = 0;
  let negativeIndex = 0;

  while (positiveIndex < positive.length && negativeIndex < negative.length) {
    const creditor = positive[positiveIndex];
    const debtor = negative[negativeIndex];

    const amount = creditor.balance.lessThan(debtor.balance) ? creditor.balance : debtor.balance;

    transactions.push({
      fromUserId: debtor.user_id,
      toUserId: creditor.user_id,
      amount,
    });

    creditor.balance = creditor.balance.minus(amount);
    debtor.balance = debtor.balance.minus(amount);

    if (creditor.balance.isZero()) {
      positiveIndex += 1;
    }
    if (debtor.balance.isZero()) {
      negativeIndex += 1;
    }
  }

  return transactions;
};
