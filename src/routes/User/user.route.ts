import { Router } from "express";
import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../../controllers/User/user.controller.js";
import { upload } from "../../middlewares/multer.js";
import { authenticateToken } from "../../middlewares/jwt.middlewares.js";
const router = Router();

router.get("/",authenticateToken ,getAllUsers);
router.post("/", upload.single("avatar"), createUser);
router.post("/login",  loginUser);
router.delete("/:id",authenticateToken ,deleteUser);
router.patch("/:id", authenticateToken,upload.single("avatar"), updateUser);

export default router;
