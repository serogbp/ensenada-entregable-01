import { Router } from "express";
import { isLogged } from "../Middleware/jwt.middleware.js";
import { getFeedback, addFeedback } from "../Services/feedback.service.js";

const router = Router();

// prettier-ignore
router.route("/")
	.get(isLogged, getFeedback)
	.post(isLogged, addFeedback);

export default router;
