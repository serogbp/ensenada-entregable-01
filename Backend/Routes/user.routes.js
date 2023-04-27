import { Router } from "express";
import { getUser, updateUser, deleteUser, getFriends, getNoFriends } from "../Services/user.service.js";
import { checkUser } from "../Middleware/user.middleware.js";

const router = Router();

router
	.route("/:user_id")
	.get(getUser) // pantalla perfil usuario
	.patch(checkUser(), updateUser) // pantalla modificar usuario
	.delete(deleteUser); // pantalla modificar usuario

// prettier-ignore
router.route("/:user_id/friends")
	.get(getFriends); // pantalla lista amigos

// prettier-ignore
router.route("/:user_id/no_friends")
	.get(getNoFriends); // pantalla lista amigos

// prettier-ignore
router.route("/:user_id/friends/:friend_id")
	.get(getUser); // pantalla perfil amigo

export default router;

// localhost:5500/user
// localhost:5500/user?id=1

//perfil-de-usuario.html
//perfil-de-usuario.html?id=1
