import { Router } from "express";
import { getUser, updateUser, deleteUser, getFriends } from "../Services/user.service.js";
import { checkUser } from "../Middleware/user.middleware.js";

const router = Router();

router
	.route("/:user_id")
	.get(getUser) // pantalla perfil usuario
	.patch(checkUser(), updateUser) // pantalla modificar usuario
	.delete(deleteUser); // pantalla modificar usuario

router.route("/:user_id/friends").get(getFriends);

export default router;
