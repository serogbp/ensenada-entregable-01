import { Router } from "express";
import { getPosts, savePost, saveLike } from "../Services/post.service.js";
import { body } from "express-validator";
import { isLogged } from "../Middleware/jwt.middleware.js";

const router = Router();

// prettier-ignore
router.route("/")
	.get(isLogged,getPosts) // pantalla feed obtener posts
	.post(isLogged, body("content").isLength({max:280}).escape(), savePost); // pantalla feed guardar post

router.route("/like/:post_id").patch(isLogged, saveLike); // dar like

export default router;
