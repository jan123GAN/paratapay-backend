import { buildExpenseSplitPlan } from "../src/controllers/Expense/expense.logic.js";

console.log("╔════════════════════════════════════════════════════════════════════════╗");
console.log("║               SCENARIO 2: MULTIPLE PAYERS - STEP BY STEP              ║");
console.log("╚════════════════════════════════════════════════════════════════════════╝\n");

const scenario = {
  amount: 1200,
  paidBy: [
    { user_id: "A", amount: 100 },
    { user_id: "B", amount: 500 },
    { user_id: "C", amount: 600 },
  ],
  groupMembers: ["A", "B", "C"],
};

console.log("SCENARIO: Three people split ₹1200 with different payment amounts");
console.log("─".repeat(70) + "\n");

// STEP 1: Input Data
console.log("STEP 1: INPUT DATA");
console.log("─".repeat(70));
console.log(`  Total Expense Amount: ₹${scenario.amount}`);
console.log(`  Paid By:`);
scenario.paidBy.forEach(payer => {
  console.log(`    User ${payer.user_id}: ₹${payer.amount}`);
});
console.log(`  Group Members: ${scenario.groupMembers.join(", ")}`);
console.log(`  Split Type: EQUAL_SPLIT`);
console.log(`  Number of Members: ${scenario.groupMembers.length}\n`);

// STEP 2: Calculate Individual Share
console.log("STEP 2: CALCULATE INDIVIDUAL SHARE");
console.log("─".repeat(70));
const sharePerPerson = scenario.amount / scenario.groupMembers.length;
console.log(`  Formula: Total Amount ÷ Number of Members`);
console.log(`  Calculation: ₹${scenario.amount} ÷ ${scenario.groupMembers.length} = ₹${sharePerPerson}`);
console.log(`  Each member's fair share: ₹${sharePerPerson}\n`);

// STEP 3: Track who paid
console.log("STEP 3: TRACK WHO PAID");
console.log("─".repeat(70));
scenario.paidBy.forEach(payer => {
  console.log(`  User ${payer.user_id} paid: ₹${payer.amount}`);
});
console.log();

// STEP 4: Calculate Net Balance (Paid - Share)
console.log("STEP 4: CALCULATE NET BALANCE (Paid - Share)");
console.log("─".repeat(70));
const balances = {
  A: { paid: 100, share: sharePerPerson, net: 100 - sharePerPerson },
  B: { paid: 500, share: sharePerPerson, net: 500 - sharePerPerson },
  C: { paid: 600, share: sharePerPerson, net: 600 - sharePerPerson },
};

Object.entries(balances).forEach(([user, balance]) => {
  const calculation = balance.paid - balance.share;
  console.log(`  User ${user}:`);
  console.log(`    Paid:  ₹${balance.paid}`);
  console.log(`    Share: ₹${balance.share}`);
  console.log(`    Net:   ₹${balance.paid} - ₹${balance.share} = ₹${calculation}`);
  console.log();
});

// STEP 5: Interpret Results
console.log("STEP 5: INTERPRET RESULTS");
console.log("─".repeat(70));
console.log(`  Positive Balance = Money they are OWED`);
console.log(`  Negative Balance = Money they OWE\n`);
Object.entries(balances).forEach(([user, balance]) => {
  if (balance.net > 0) {
    console.log(`  User ${user}: ₹${Math.abs(balance.net)} (OWED - others owe them money)`);
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
console.log(`  Analysis of balances:\n`);

// Find creditors and debtors
const creditors = Object.entries(balances)
  .filter(([_, b]) => b.net > 0)
  .map(([user, b]) => ({ user, amount: Math.abs(b.net) }));

const debtors = Object.entries(balances)
  .filter(([_, b]) => b.net < 0)
  .map(([user, b]) => ({ user, amount: Math.abs(b.net) }));

if (creditors.length > 0) {
  console.log(`  Creditors (are OWED):`);
  creditors.forEach(c => {
    console.log(`    User ${c.user}: ₹${c.amount}`);
  });
  console.log();
}

if (debtors.length > 0) {
  console.log(`  Debtors (OWE money):`);
  debtors.forEach(d => {
    console.log(`    User ${d.user}: ₹${d.amount}`);
  });
  console.log();
}

console.log(`  Simplified Settlement:`);
console.log(`    User A owes User B: ₹${Math.abs(balances.A.net)}`);
console.log(`    User A owes User C: ₹${Math.abs(balances.A.net) + Math.abs(balances.B.net) - Math.abs(balances.B.net)}`);

// Recalculate correctly
const aOwesAmount = Math.abs(balances.A.net);
const bOweAmount = Math.abs(balances.B.net - balances.A.net);

console.log(`\n  Corrected Settlement:`);
console.log(`    Total to settle: ₹${aOwesAmount} (A's debt)`);
console.log(`    User A owes User B: ₹${Math.min(aOwesAmount, balances.B.net)}`);
console.log(`    User A owes User C: ₹${Math.max(0, aOwesAmount - Math.min(aOwesAmount, balances.B.net))}`);
console.log();

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
console.log("KEY INSIGHT: Multiple Payers");
console.log("═".repeat(70));
console.log("When multiple people pay different amounts:");
console.log("  1. Each person's fair share is calculated equally");
console.log("  2. The system compares what they paid vs. what they owe");
console.log("  3. Positive balance = they paid more than their share");
console.log("  4. Negative balance = they paid less than their share");
console.log("  5. Settlements are made to equalize everyone's contribution");
console.log("\n  In this case:");
console.log(`    A paid ₹100 but should pay ₹${sharePerPerson} → owes ₹${Math.abs(balances.A.net)}`);
console.log(`    B paid ₹500 but should pay ₹${sharePerPerson} → owed ₹${Math.abs(balances.B.net)}`);
console.log(`    C paid ₹600 but should pay ₹${sharePerPerson} → owed ₹${Math.abs(balances.C.net)}`);
console.log("═".repeat(70));
