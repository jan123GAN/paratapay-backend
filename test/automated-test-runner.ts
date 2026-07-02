import { buildExpenseSplitPlan } from "../src/controllers/Expense/expense.logic.js";

console.log("╔═══════════════════════════════════════════════════════════════════════════╗");
console.log("║                   AUTOMATED TEST RUNNER - ALL SCENARIOS                   ║");
console.log("╚═══════════════════════════════════════════════════════════════════════════╝\n");

const tests = [
  {
    name: "Test 1: Single Payer - Equal Split (₹900)",
    input: {
      amount: 900,
      splitType: "EQUAL_SPLIT",
      paidByData: [{ user_id: "A", amount: 900 }],
      groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
    },
    expected: {
      shares: { A: "300", B: "300", C: "300" },
      deltas: { A: "600", B: "-300", C: "-300" },
    },
  },
  {
    name: "Test 2: Multiple Payers - Equal Split (₹1200)",
    input: {
      amount: 1200,
      splitType: "EQUAL_SPLIT",
      paidByData: [
        { user_id: "A", amount: 100 },
        { user_id: "B", amount: 500 },
        { user_id: "C", amount: 600 },
      ],
      groupMembers: [{ user_id: "A" }, { user_id: "B" }, { user_id: "C" }],
    },
    expected: {
      shares: { A: "400", B: "400", C: "400" },
      deltas: { A: "-300", B: "100", C: "200" },
    },
  },
  {
    name: "Test 3: Custom Split - Exact Amounts (₹1000)",
    input: {
      amount: 1000,
      splitType: "CUSTOM_SPLIT",
      paidByData: [{ user_id: "A", amount: 1000 }],
      expenseData: [
        { user_id: "A", amount: 600 },
        { user_id: "B", amount: 250 },
        { user_id: "C", amount: 150 },
      ],
    },
    expected: {
      shares: { A: "600", B: "250", C: "150" },
      deltas: { A: "400", B: "-250", C: "-150" },
    },
  },
  {
    name: "Test 4: Custom Split - Percentages (₹1000)",
    input: {
      amount: 1000,
      splitType: "CUSTOM_SPLIT",
      paidByData: [{ user_id: "A", amount: 1000 }],
      expenseData: [
        { user_id: "A", percentage: 60 },
        { user_id: "B", percentage: 25 },
        { user_id: "C", percentage: 15 },
      ],
    },
    expected: {
      shares: { A: "600", B: "250", C: "150" },
      deltas: { A: "400", B: "-250", C: "-150" },
    },
  },
  {
    name: "Test 5: Four Members - Equal Split (₹2000)",
    input: {
      amount: 2000,
      splitType: "EQUAL_SPLIT",
      paidByData: [
        { user_id: "A", amount: 1000 },
        { user_id: "B", amount: 1000 },
      ],
      groupMembers: [
        { user_id: "A" },
        { user_id: "B" },
        { user_id: "C" },
        { user_id: "D" },
      ],
    },
    expected: {
      shares: { A: "500", B: "500", C: "500", D: "500" },
      deltas: { A: "500", B: "500", C: "-500", D: "-500" },
    },
  },
  {
    name: "Test 6: Two Members - Unequal Split (₹500)",
    input: {
      amount: 500,
      splitType: "EQUAL_SPLIT",
      paidByData: [{ user_id: "A", amount: 500 }],
      groupMembers: [{ user_id: "A" }, { user_id: "B" }],
    },
    expected: {
      shares: { A: "250", B: "250" },
      deltas: { A: "250", B: "-250" },
    },
  },
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
  console.log(`\n${"═".repeat(75)}`);
  console.log(`${test.name}`);
  console.log(`${"═".repeat(75)}`);

  try {
    const result = buildExpenseSplitPlan(test.input);

    console.log("\n📥 INPUT:");
    console.log(`   Amount: ₹${test.input.amount}`);
    console.log(`   Payers: ${test.input.paidByData.map(p => `${p.user_id}(₹${p.amount})`).join(", ")}`);
    console.log(`   Members: ${(test.input.groupMembers || []).map(m => m.user_id).join(", ")}`);
    console.log(`   Type: ${test.input.splitType}`);

    console.log("\n📤 SHARE RECORDS (What each person owes):");
    const shares = {};
    result.shareRecords.forEach(record => {
      shares[record.user_id] = record.amount.toString();
      console.log(`   ${record.user_id} = ₹${record.amount.toString()}`);
    });

    console.log("\n💰 BALANCE DELTAS (Net change per person):");
    const deltas = {};
    for (const [userId, delta] of result.balanceDeltas.entries()) {
      deltas[userId] = delta.toString();
      const sign = delta > 0 ? "+" : "";
      console.log(`   ${userId} = ${sign}₹${delta.toString()}`);
    }

    console.log("\n✓ VERIFICATION:");
    const totalShares = result.shareRecords.reduce((sum, r) => sum + parseFloat(r.amount.toString()), 0);
    console.log(`   Total shares: ₹${totalShares} (expected ₹${test.input.amount})`);
    const totalDeltas = Array.from(result.balanceDeltas.values()).reduce((sum, d) => sum + parseFloat(d.toString()), 0);
    console.log(`   Total deltas: ₹${totalDeltas} (expected ₹0)`);

    // Verify against expected
    let testPassed = true;
    
    Object.entries(test.expected.shares).forEach(([user, expectedShare]) => {
      if (shares[user] !== expectedShare) {
        console.log(`   ⚠ User ${user}: expected ₹${expectedShare}, got ₹${shares[user]}`);
        testPassed = false;
      }
    });

    Object.entries(test.expected.deltas).forEach(([user, expectedDelta]) => {
      if (deltas[user] !== expectedDelta) {
        console.log(`   ⚠ User ${user}: expected ${expectedDelta}, got ${deltas[user]}`);
        testPassed = false;
      }
    });

    if (testPassed) {
      console.log("\n✅ TEST PASSED");
      passed++;
    } else {
      console.log("\n❌ TEST FAILED");
      failed++;
    }
  } catch (error) {
    console.log(`\n❌ ERROR: ${error.message}`);
    failed++;
  }
});

console.log(`\n\n${"═".repeat(75)}`);
console.log("TEST SUMMARY");
console.log(`${"═".repeat(75)}`);
console.log(`Total Tests: ${tests.length}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`Success Rate: ${((passed / tests.length) * 100).toFixed(1)}%`);

if (failed === 0) {
  console.log("\n🎉 ALL TESTS PASSED! Expense split system is working correctly.");
} else {
  console.log(`\n⚠️  ${failed} test(s) failed. Please review the output above.`);
}

console.log(`${"═".repeat(75)}\n`);

// Exit with appropriate code
process.exit(failed === 0 ? 0 : 1);
