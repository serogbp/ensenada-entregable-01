import { Router } from "express";
import { body } from "express-validator";
import { isUser } from "../Services/login.service.js";

const router = Router();

// prettier-ignore
router.route("/").post(
	body("email").isEmail().escape(),
	body("password").escape(),
	isUser
);

export default router;
