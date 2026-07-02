import assert from "node:assert/strict";
import { buildExpenseSplitPlan } from "../src/controllers/Expense/expense.logic.js";

const equalSplit = buildExpenseSplitPlan({
  amount: 900,
  splitType: "EQUAL_SPLIT",
  paidByData: [{ user_id: "A", amount: 900 }],
  groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
});

assert.equal(equalSplit.shareRecords.length, 3);
assert.equal(equalSplit.shareRecords[1].amount.toString(), "300");
assert.equal(equalSplit.balanceDeltas.get("A")?.toString(), "600");
assert.equal(equalSplit.balanceDeltas.get("B")?.toString(), "-300");
assert.equal(equalSplit.balanceDeltas.get("C")?.toString(), "-300");

const multiPayer = buildExpenseSplitPlan({
  amount: 1200,
  splitType: "EQUAL_SPLIT",
  paidByData: [{ user_id: "A", amount: 100 }, { user_id: "B", amount: 500 }, { user_id: "C", amount: 600 }],
  groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
});

assert.equal(multiPayer.balanceDeltas.get("A")?.toString(), "-300");
assert.equal(multiPayer.balanceDeltas.get("B")?.toString(), "100");
assert.equal(multiPayer.balanceDeltas.get("C")?.toString(), "200");

const customSplit = buildExpenseSplitPlan({
  amount: 1000,
  splitType: "CUSTOM_SPLIT",
  paidByData: [{ user_id: "A", amount: 1000 }],
  expenseData: [{ user_id: "A", amount: 600 }, { user_id: "B", amount: 250 }, { user_id: "C", amount: 150 }],
});

assert.equal(customSplit.shareRecords[1].amount.toString(), "250");
assert.equal(customSplit.shareRecords[2].amount.toString(), "150");
assert.equal(customSplit.balanceDeltas.get("A")?.toString(), "400");

const percentageSplit = buildExpenseSplitPlan({
  amount: 1000,
  splitType: "CUSTOM_SPLIT",
  paidByData: [{ user_id: "A", amount: 1000 }],
  expenseData: [{ user_id: "A", percentage: 60 }, { user_id: "B", percentage: 25 }, { user_id: "C", percentage: 15 }],
});

assert.equal(percentageSplit.shareRecords[1].amount.toString(), "250");
assert.equal(percentageSplit.shareRecords[2].amount.toString(), "150");
console.log("expense logic tests passed");
