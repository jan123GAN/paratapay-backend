import { Router } from "express";
import { createExpense, createSettlement, getExpense, getAllExpenses, deleteExpense, getSimplifiedDebts, updateExpense } from "../../controllers/Expense/expense.controller";
import { authenticateToken } from "../../middlewares/jwt.middlewares.js";
const router = Router();

router.post("/", authenticateToken, createExpense);
router.post("/settle", authenticateToken, createSettlement);
router.get("/group/:group_id/simplify", getSimplifiedDebts);
router.put("/:id", authenticateToken, updateExpense);
router.get("/:id", getExpense);
router.delete("/:id", deleteExpense);
router.get("/", getAllExpenses);
export default router;
