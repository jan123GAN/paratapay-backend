import { Router } from "express";
import { createExpense, createSettlement, getExpense, getAllExpenses, deleteExpense } from "../../controllers/Expense/expense.controller";
import { upload } from "../../middlewares/multer.js";
import { authenticateToken } from "../../middlewares/jwt.middlewares.js";
const router = Router();

router.post("/",authenticateToken ,createExpense);
router.post("/settle", createSettlement); // <-- Add this new POST route
router.get("/:id", getExpense)
router.delete("/:id", deleteExpense)
router.get("/", getAllExpenses)
export default router;
