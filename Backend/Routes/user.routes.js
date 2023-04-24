import { Router } from "express";
import { getUser, updateUser, deleteUser } from "../Services/user.service.js";

const router = Router();

router
	.route("/:email") // TODO cambiar a username cuando lo podamos usar, y cambiarlo de cada funcion en user.service
	.get(getUser) // pantalla perfil usuario
	.patch(updateUser) // pantalla modificar usuario
	.delete(deleteUser); // pantalla modificar usuario

export default router;
