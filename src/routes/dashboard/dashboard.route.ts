import { Router } from "express";
import { 
  getDashboardStats,
  getRecentExpenses,
  getActiveGroups,
  getMonthlySpending,
  getSettlements
} from "../../controllers/dashboard/dashboard.controller";
import { authenticateToken } from "../../middlewares/jwt.middlewares";

const router = Router();

router.get("/stats/:user_id", authenticateToken, getDashboardStats);
router.get("/recent-expenses/:user_id", authenticateToken, getRecentExpenses);
router.get("/active-groups/:user_id", authenticateToken, getActiveGroups);
router.get("/monthly-spending/:user_id", authenticateToken, getMonthlySpending);
router.get("/settlements/:group_id", authenticateToken, getSettlements);

export default router;