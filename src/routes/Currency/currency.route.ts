import { Router } from "express";
import { authenticateToken } from "../../middlewares/jwt.middlewares.js";
import {
  createCurrency,
  getCurrency,
  updateCurrency,
  deleteCurrency,
} from "../../controllers/Currency/currency.controller.js";

const router = Router();
router.get("/", authenticateToken, getCurrency);
router.post("/", authenticateToken, createCurrency);
router.put("/:id", authenticateToken, updateCurrency);
router.delete("/:id", authenticateToken, deleteCurrency);

export default router;
