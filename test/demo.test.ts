import { buildExpenseSplitPlan } from "../src/controllers/Expense/expense.logic.js";

console.log("=== Testing Equal Split Distribution of 900 ===\n");

const testCase = buildExpenseSplitPlan({
  amount: 900,
  splitType: "EQUAL_SPLIT",
  paidByData: [{ user_id: "A", amount: 900 }],
  groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
});

console.log("Expense Details:");
console.log("- Total Amount: 900");
console.log("- Paid By: A (900)");
console.log("- Split Type: EQUAL_SPLIT");
console.log("- Group Members: A, B, C\n");

console.log("Share Records (what each person owes):");
testCase.shareRecords.forEach((record) => {
  console.log(`  User: ${record.user_id}, Share: ${record.amount.toString()}`);
});

console.log("\nBalance Deltas (net balance change):");
for (const [userId, delta] of testCase.balanceDeltas.entries()) {
  console.log(`  User ${userId}: ${delta.toString()}`);
}

console.log("\nExpected Result:");
console.log("  A: +600 (paid 900, owes 300)");
console.log("  B: -300 (owes 300)");
console.log("  C: -300 (owes 300)");

console.log("\n=== Testing Multiple Payers ===\n");

const multiPayerTest = buildExpenseSplitPlan({
  amount: 1200,
  splitType: "EQUAL_SPLIT",
  paidByData: [
    { user_id: "A", amount: 100 },
    { user_id: "B", amount: 500 },
    { user_id: "C", amount: 600 },
  ],
  groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
});

console.log("Expense Details:");
console.log("- Total Amount: 1200");
console.log("- Paid By: A (100) + B (500) + C (600)");
console.log("- Split Type: EQUAL_SPLIT");
console.log("- Group Members: A, B, C\n");

console.log("Balance Deltas:");
for (const [userId, delta] of multiPayerTest.balanceDeltas.entries()) {
  console.log(`  User ${userId}: ${delta.toString()}`);
}

console.log("\nExpected Result:");
console.log("  A: -300 (paid 100, owes 400, net = -300)");
console.log("  B: +100 (paid 500, owes 400, net = +100)");
console.log("  C: +200 (paid 600, owes 400, net = +200)");

console.log("\n=== Testing Custom Split ===\n");

const customSplitTest = buildExpenseSplitPlan({
  amount: 1000,
  splitType: "CUSTOM_SPLIT",
  paidByData: [{ user_id: "A", amount: 1000 }],
  expenseData: [
    { user_id: "A", amount: 600 },
    { user_id: "B", amount: 250 },
    { user_id: "C", amount: 150 },
  ],
});

console.log("Expense Details:");
console.log("- Total Amount: 1000");
console.log("- Paid By: A (1000)");
console.log("- Split Type: CUSTOM_SPLIT");
console.log("- Splits: A (600) + B (250) + C (150)\n");

console.log("Balance Deltas:");
for (const [userId, delta] of customSplitTest.balanceDeltas.entries()) {
  console.log(`  User ${userId}: ${delta.toString()}`);
}

console.log("\nExpected Result:");
console.log("  A: +400 (paid 1000, owes 600, net = +400)");
console.log("  B: -250 (owes 250)");
console.log("  C: -150 (owes 150)");
