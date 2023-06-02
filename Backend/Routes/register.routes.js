import { Router } from "express";
import { checkUser } from "../Middleware/user.middleware.js";
import { register } from "../Services/register.service.js";

const router = Router();

// prettier-ignore
router.route("/")
	.post( // pantalla registro
		checkUser,
		register
	);

export default router;
