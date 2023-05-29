import { Router } from "express";
import { isAdmin } from "../Middleware/jwt.middleware.js";
import { getAllUsers, adminUpdateUser, adminDeleteUser } from "../Services/admin.service.js";
const router = Router();

// prettier-ignore
router.route("/")
	.get(isAdmin,getAllUsers)
	.patch(isAdmin, adminUpdateUser)
	.delete(isAdmin, adminDeleteUser);

export default router;
