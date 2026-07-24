import { Router } from "express";
import userRouter from "./User/user.route.js";
import groupRouter from "./Group/group.route.js";
import currencyRouter from "./Currency/currency.route.js";
import healthRoutes from "@/routes/Health/health.routes.js";
import expenseRoutes from "@/routes/Expense/expense.route.js";
import dashboardRouter from "./dashboard/dashboard.route.js";
const router = Router();

router.use("/user", userRouter);
router.use("/group", groupRouter);
router.use("/currency", currencyRouter);
router.use("/health", healthRoutes);
router.use("/expense", expenseRoutes);
router.use("/dashboard", dashboardRouter);
export default router;
