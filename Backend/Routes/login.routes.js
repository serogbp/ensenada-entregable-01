import { Router } from "express";
import { body } from "express-validator";
import { isUser } from "../Services/login.service.js";

const router = Router();

// prettier-ignore
router.route("/").post(
	body("email").isEmail().escape(),
	body("password").isLength({ max: 10 }).escape(),
	// TODO discutir: usar este middleware (isUser) como otra validacion mas? que retorne true o false?
	isUser
	// Y aqui hacer el send() ?
);

export default router;
