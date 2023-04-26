import { Router } from "express";
import { getUser, updateUser, deleteUser } from "../Services/user.service.js";
import { checkUser } from "../Middleware/user.middleware.js";

const router = Router();

router
	.route("/:user_id") // TODO cambiar a username cuando lo podamos usar, y cambiarlo de cada funcion en user.service
	.get(getUser) // pantalla perfil usuario
	.patch(checkUser(), updateUser) // pantalla modificar usuario
	.delete(deleteUser); // pantalla modificar usuario

export default router;
