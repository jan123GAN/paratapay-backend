import { buildExpenseSplitPlan } from "../src/controllers/Expense/expense.logic.js";

console.log("╔════════════════════════════════════════════════════════════════════════╗");
console.log("║                    EXPENSE SPLIT - FORMATTED OUTPUT                    ║");
console.log("╚════════════════════════════════════════════════════════════════════════╝\n");

// Example 1: Single Payer
console.log("Example 1: Single Payer - A pays ₹900");
console.log("─".repeat(70));
console.log("Example Input:");
console.log("900");
console.log("\nOutput:");

const result1 = buildExpenseSplitPlan({
  amount: 900,
  splitType: "EQUAL_SPLIT",
  paidByData: [{ user_id: "A", amount: 900 }],
  groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
});

result1.shareRecords.forEach(record => {
  console.log(`${record.user_id} = ${record.amount.toString()}`);
});

console.log("\n" + "═".repeat(70) + "\n");

// Example 2: Multiple Payers
console.log("Example 2: Multiple Payers - Total ₹1200");
console.log("─".repeat(70));
console.log("Example Input:");
console.log("A pays: 100");
console.log("B pays: 500");
console.log("C pays: 600");
console.log("Total: 1200");
console.log("\nOutput:");

const result2 = buildExpenseSplitPlan({
  amount: 1200,
  splitType: "EQUAL_SPLIT",
  paidByData: [
    { user_id: "A", amount: 100 },
    { user_id: "B", amount: 500 },
    { user_id: "C", amount: 600 },
  ],
  groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
});

result2.shareRecords.forEach(record => {
  console.log(`${record.user_id} = ${record.amount.toString()}`);
});

console.log("\n" + "═".repeat(70) + "\n");

// Example 3: Settlement Summary
console.log("Example 3: Settlement Summary");
console.log("─".repeat(70));
console.log("Who Owes Whom (from Multiple Payers example):");
console.log();

const settlements = [];
for (const [userId, delta] of result2.balanceDeltas.entries()) {
  if (delta < 0) {
    settlements.push({ debtor: userId, amount: Math.abs(delta.toNumber()) });
  }
}

const creditors = [];
for (const [userId, delta] of result2.balanceDeltas.entries()) {
  if (delta > 0) {
    creditors.push({ creditor: userId, amount: delta.toNumber() });
  }
}

creditors.forEach(c => {
  console.log(`${c.creditor} is owed: ₹${c.amount}`);
});

settlements.forEach(s => {
  console.log(`${s.debtor} owes: ₹${s.amount}`);
});

console.log("\n" + "═".repeat(70) + "\n");

// Example 4: Custom Split
console.log("Example 4: Custom Split - A pays ₹1000");
console.log("─".repeat(70));
console.log("Example Input:");
console.log("A: 600");
console.log("B: 250");
console.log("C: 150");
console.log("Total: 1000");
console.log("\nOutput:");

const result3 = buildExpenseSplitPlan({
  amount: 1000,
  splitType: "CUSTOM_SPLIT",
  paidByData: [{ user_id: "A", amount: 1000 }],
  expenseData: [
    { user_id: "A", amount: 600 },
    { user_id: "B", amount: 250 },
    { user_id: "C", amount: 150 },
  ],
});

result3.shareRecords.forEach(record => {
  console.log(`${record.user_id} = ${record.amount.toString()}`);
});

console.log("\n" + "═".repeat(70) + "\n");

// Example 5: Percentage Split
console.log("Example 5: Percentage Split - Total ₹1000");
console.log("─".repeat(70));
console.log("Example Input:");
console.log("A: 60%");
console.log("B: 25%");
console.log("C: 15%");
console.log("Total: 1000");
console.log("\nOutput:");

const result4 = buildExpenseSplitPlan({
  amount: 1000,
  splitType: "CUSTOM_SPLIT",
  paidByData: [{ user_id: "A", amount: 1000 }],
  expenseData: [
    { user_id: "A", percentage: 60 },
    { user_id: "B", percentage: 25 },
    { user_id: "C", percentage: 15 },
  ],
});

result4.shareRecords.forEach(record => {
  console.log(`${record.user_id} = ${record.amount.toString()}`);
});

console.log("\n" + "═".repeat(70));
console.log("✓ All outputs formatted in clean Example Input/Output format");
console.log("═".repeat(70));
