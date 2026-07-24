import test from "node:test";
import assert from "node:assert/strict";
import { Prisma } from "@prisma/client";

import { buildExpenseBalanceEffects, buildExpenseSplitPlan, buildGroupBalanceMap, normalizePayerEntries, simplifyDebts } from "./expense.service";

test("buildExpenseSplitPlan handles percentage splits correctly", () => {
  const amount = new Prisma.Decimal(1000);
  const groupMembers = [
    { user_id: "u1" },
    { user_id: "u2" },
    { user_id: "u3" },
  ];

  const plan = buildExpenseSplitPlan({
    amount,
    groupMembers: groupMembers as any,
    splitType: "PERCENTAGE_SPLIT",
    payerUserId: "payer",
    expenseData: [
      { user_id: "u1", percentage: 50 },
      { user_id: "u2", percentage: 25 },
      { user_id: "u3", percentage: 25 },
    ] as any,
  });

  assert.equal(plan.records.length, 3);
  assert.equal(plan.records[0].amount.toString(), "500");
  assert.equal(plan.records[1].amount.toString(), "250");
  assert.equal(plan.records[2].amount.toString(), "250");
});

test("buildExpenseSplitPlan rejects invalid percentage totals", () => {
  const amount = new Prisma.Decimal(1000);
  const groupMembers = [{ user_id: "u1" }, { user_id: "u2" }];

  assert.throws(() => {
    buildExpenseSplitPlan({
      amount,
      groupMembers: groupMembers as any,
      splitType: "PERCENTAGE_SPLIT",
      payerUserId: "payer",
      expenseData: [
        { user_id: "u1", percentage: 60 },
        { user_id: "u2", percentage: 20 },
      ] as any,
    });
  }, /must total exactly 100%/);
});

test("normalizePayerEntries preserves all payers and totals", () => {
  const normalized = normalizePayerEntries({
    amount: 100,
    paidBy: "payer-1",
    paidByData: [
      { user_id: "payer-1", amount: 60 },
      { user_id: "payer-2", amount: 40 },
    ],
  });

  assert.equal(normalized.length, 2);
  assert.equal(normalized[0].amount, 60);
  assert.equal(normalized[1].amount, 40);
});

test("buildExpenseSplitPlan rejects zero percentages", () => {
  const amount = new Prisma.Decimal(100);
  const groupMembers = [{ user_id: "u1" }, { user_id: "u2" }];

  assert.throws(() => {
    buildExpenseSplitPlan({
      amount,
      groupMembers: groupMembers as any,
      splitType: "PERCENTAGE_SPLIT",
      payerUserId: "payer",
      expenseData: [
        { user_id: "u1", percentage: 0 },
        { user_id: "u2", percentage: 100 },
      ] as any,
    });
  }, /must be greater than zero/);
});

test("buildExpenseBalanceEffects reverses prior expense impacts", () => {
  const effects = buildExpenseBalanceEffects({
    payments: [{ user_id: "u1", amount_paid: new Prisma.Decimal(100) }],
    splits: [{ user_id: "u2", amount: new Prisma.Decimal(50) }, { user_id: "u3", amount: new Prisma.Decimal(50) }],
    operation: "reverse",
  });

  assert.equal(effects.get("u1")?.toString(), "-100");
  assert.equal(effects.get("u2")?.toString(), "50");
  assert.equal(effects.get("u3")?.toString(), "50");
});

test("buildGroupBalanceMap recomputes balances from expense ledgers", () => {
  const balances = buildGroupBalanceMap({
    expenses: [
      { id: "e1", group_id: "g1", currency_code: "USD" },
      { id: "e2", group_id: "g1", currency_code: "USD" },
    ] as any,
    expensePayments: [
      { expense_id: "e1", user_id: "u1", amount_paid: new Prisma.Decimal(100) },
      { expense_id: "e2", user_id: "u2", amount_paid: new Prisma.Decimal(50) },
    ] as any,
    expenseSplits: [
      { expense_id: "e1", user_id: "u2", amount: new Prisma.Decimal(50) },
      { expense_id: "e1", user_id: "u3", amount: new Prisma.Decimal(50) },
      { expense_id: "e2", user_id: "u3", amount: new Prisma.Decimal(50) },
    ] as any,
  });

  assert.equal(balances.get("u1:USD")?.toString(), "100");
  assert.equal(balances.get("u2:USD")?.toString(), "0");
  assert.equal(balances.get("u3:USD")?.toString(), "-100");
});

test("simplifyDebts reduces balances into minimal transactions", () => {
  const balances = [
    { user_id: "A", balance: new Prisma.Decimal(800) },
    { user_id: "B", balance: new Prisma.Decimal(-300) },
    { user_id: "C", balance: new Prisma.Decimal(-200) },
    { user_id: "D", balance: new Prisma.Decimal(-300) },
  ];

  const transactions = simplifyDebts(balances as any);

  assert.equal(transactions.length, 3);
  assert.deepEqual(
    transactions.map((item) => ({ from: item.fromUserId, to: item.toUserId, amount: item.amount.toString() })),
    [
      { from: "B", to: "A", amount: "300" },
      { from: "C", to: "A", amount: "200" },
      { from: "D", to: "A", amount: "300" },
    ]
  );
});
