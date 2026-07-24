import { Router } from "express";
import { upload } from "../../middlewares/multer.js";
import {
  addGroupMember,
  createGroup,
  deleteGroup,
  getAllGroups,
  getGroupMembers,
  removeGroupMember,
  updateGroup,
  createBalance,
  updateBalance,
  getBalance,
  getAllBalance,
  getGroupByUserId,
} from "../../controllers/Group/group.controller.js";

import { authenticateToken } from "../../middlewares/jwt.middlewares.js";

const router = Router();

router.get("/", authenticateToken, getAllGroups);
router.post("/", authenticateToken, upload.single("groupAvatar"), createGroup);
router.post("/addmember", authenticateToken, addGroupMember);
router.get("/getmembers/:id", authenticateToken, getGroupMembers);
router.patch("/removemembers/:id", authenticateToken, removeGroupMember);
router.put("/:id", authenticateToken, upload.single("groupAvatar"), updateGroup);
router.delete("/:id", authenticateToken, deleteGroup);

// Balance

router.get("/balance/:balance_id", authenticateToken, getBalance);
router.get("/balance", authenticateToken, getAllBalance);
router.post("/balance", authenticateToken, createBalance);
router.put("/balance/:balance_id", authenticateToken, updateBalance); // we use group id we empliment this logic

router.get("/user/:userId", authenticateToken, getGroupByUserId);

export default router;
