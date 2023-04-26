import { Router } from "express";
import { getPosts } from "../Services/post.service.js";
import { body } from "express-validator";

const router = Router();

// prettier-ignore
router.route("/:user_id")
	.get(body("content").isLength({max:280}).escape(),
	getPosts);

export default router;
