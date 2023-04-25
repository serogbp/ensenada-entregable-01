import { Router } from "express";
import { body } from "express-validator";
import { register } from "../Services/register.service.js";

const router = Router();

// prettier-ignore
router.route("/")
	.post( // pantalla registro
		body("email").isEmail().escape(),
		register
	);

export default router;
