import { Router } from "express";
import { getPosts, savePost, saveLike, deleteLike } from "../Services/post.service.js";
import { body } from "express-validator";
import { isLogged } from "../Middleware/jwt.middleware.js";

const router = Router();

// prettier-ignore
router.route("/")
	.get(isLogged,getPosts) // pantalla feed obtener posts
	.post(isLogged, body("content").isLength({max:280}).escape(), savePost); // pantalla feed guardar post

// prettier-ignore
router.route("/like/:post_id")
	.post(isLogged, saveLike) // dar like
	.delete(isLogged, deleteLike) // quitar like

export default router;
