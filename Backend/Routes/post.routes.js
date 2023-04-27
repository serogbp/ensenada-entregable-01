import { Router } from "express";
import { getPosts, savePost, saveLike } from "../Services/post.service.js";
import { body } from "express-validator";

const router = Router();

// prettier-ignore
router.route("/:user_id")
	.get(body("content").isLength({max:280}).escape(),getPosts) // pantalla feed obtener posts
	.post(savePost); // pantalla feed guardar post

router.route("/like/:post_id").patch(saveLike); // dar like

export default router;
