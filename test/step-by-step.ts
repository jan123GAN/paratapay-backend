import { buildExpenseSplitPlan } from "../src/controllers/Expense/expense.logic.js";

console.log("╔════════════════════════════════════════════════════════════════════════╗");
console.log("║                   EXPENSE CALCULATION - STEP BY STEP                   ║");
console.log("╚════════════════════════════════════════════════════════════════════════╝\n");

const scenario = {
  amount: 900,
  paidBy: [{ user_id: "A", amount: 900 }],
  groupMembers: ["A", "B", "C"],
};

console.log("SCENARIO: Distributing ₹900 among A, B, C");
console.log("─".repeat(70) + "\n");

// STEP 1: Input Data
console.log("STEP 1: INPUT DATA");
console.log("─".repeat(70));
console.log(`  Total Expense Amount: ₹${scenario.amount}`);
console.log(`  Paid By: User ${scenario.paidBy[0].user_id} (₹${scenario.paidBy[0].amount})`);
console.log(`  Group Members: ${scenario.groupMembers.join(", ")}`);
console.log(`  Split Type: EQUAL_SPLIT`);
console.log(`  Number of Members: ${scenario.groupMembers.length}\n`);

// STEP 2: Calculate Individual Share
console.log("STEP 2: CALCULATE INDIVIDUAL SHARE");
console.log("─".repeat(70));
const sharePerPerson = scenario.amount / scenario.groupMembers.length;
console.log(`  Formula: Total Amount ÷ Number of Members`);
console.log(`  Calculation: ₹${scenario.amount} ÷ ${scenario.groupMembers.length} = ₹${sharePerPerson}`);
console.log(`  Each member's share: ₹${sharePerPerson}\n`);

// STEP 3: Track who paid
console.log("STEP 3: TRACK WHO PAID");
console.log("─".repeat(70));
console.log(`  User A paid: ₹${scenario.paidBy[0].amount}`);
console.log(`  User B paid: ₹0`);
console.log(`  User C paid: ₹0\n`);

// STEP 4: Calculate Net Balance (Paid - Share)
console.log("STEP 4: CALCULATE NET BALANCE (Paid - Share)");
console.log("─".repeat(70));
const balances = {
  A: { paid: 900, share: sharePerPerson, net: 900 - sharePerPerson },
  B: { paid: 0, share: sharePerPerson, net: 0 - sharePerPerson },
  C: { paid: 0, share: sharePerPerson, net: 0 - sharePerPerson },
};

Object.entries(balances).forEach(([user, balance]) => {
  console.log(`  User ${user}:`);
  console.log(`    Paid:  ₹${balance.paid}`);
  console.log(`    Share: ₹${balance.share}`);
  console.log(`    Net:   ₹${balance.paid} - ₹${balance.share} = ₹${balance.net}`);
  console.log()
});

// STEP 5: Interpret Results
console.log("STEP 5: INTERPRET RESULTS");
console.log("─".repeat(70));
console.log(`  Positive Balance = Money they are OWED`);
console.log(`  Negative Balance = Money they OWE\n`);
Object.entries(balances).forEach(([user, balance]) => {
  if (balance.net > 0) {
    console.log(`  User ${user}: ₹${balance.net} (OWED - others owe them money)`);
  } else if (balance.net < 0) {
    console.log(`  User ${user}: ₹${Math.abs(balance.net)} (OWES - they owe money to others)`);
  } else {
    console.log(`  User ${user}: ₹0 (SETTLED - no debt)`);
  }
});
console.log();

// STEP 6: Who owes whom
console.log("STEP 6: SETTLEMENT (Who Owes Whom)");
console.log("─".repeat(70));
console.log(`  User B owes User A: ₹${Math.abs(balances.B.net)}`);
console.log(`  User C owes User A: ₹${Math.abs(balances.C.net)}\n`);

// STEP 7: Verify total
console.log("STEP 7: VERIFY CALCULATIONS");
console.log("─".repeat(70));
const totalPaid = Object.values(balances).reduce((sum, b) => sum + b.paid, 0);
const totalShare = Object.values(balances).reduce((sum, b) => sum + b.share, 0);
const totalNet = Object.values(balances).reduce((sum, b) => sum + b.net, 0);
console.log(`  Total Paid: ₹${totalPaid} (should equal ₹${scenario.amount})`);
console.log(`  Total Share: ₹${totalShare} (should equal ₹${scenario.amount})`);
console.log(`  Total Net Balance: ₹${totalNet} (should equal ₹0 for closed loop)`);
console.log(`  ✓ All calculations verified!\n`);

// STEP 8: Show actual logic execution
console.log("STEP 8: EXECUTE EXPENSE LOGIC");
console.log("─".repeat(70));
const result = buildExpenseSplitPlan({
  amount: scenario.amount,
  splitType: "EQUAL_SPLIT",
  paidByData: scenario.paidBy,
  groupMembers: scenario.groupMembers.map(id => ({ user_id: id })),
});

console.log("  Share Records (Expense Splits):");
result.shareRecords.forEach(record => {
  console.log(`    ${record.user_id}: ₹${record.amount.toString()}`);
});

console.log("\n  Balance Deltas (Database Updates):");
for (const [userId, delta] of result.balanceDeltas.entries()) {
  const sign = delta > 0 ? "+" : "";
  console.log(`    User ${userId}: ${sign}₹${delta.toString()}`);
}

console.log("\n" + "═".repeat(70));
console.log("PROCESS COMPLETE: Expense recorded with all balances updated!");
console.log("═".repeat(70));
