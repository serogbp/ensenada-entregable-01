import { Router } from "express";
import { getUser, updateUser, deleteUser, getFriends, getNoFriends } from "../Services/user.service.js";
import { checkUser } from "../Middleware/user.middleware.js";
import { isLogged } from "../Middleware/jwt.middleware.js";

const router = Router();

// Usuario logeado
router
	.route("/")
	.get(isLogged, getUser) // pantalla perfil usuario
	.patch(isLogged, checkUser, updateUser) // pantalla modificar usuario
	.delete(isLogged, deleteUser); // pantalla modificar usuario

// prettier-ignore
router.route("/friends")
	.get(isLogged, getFriends); // pantalla lista amigos

// prettier-ignore
router.route("/no_friends")
	.get(isLogged, getNoFriends); // pantalla lista amigos

// prettier-ignore
router.route("/:id")
	.get(isLogged, getUser); // perfil amigo

export default router;
