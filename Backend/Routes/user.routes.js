import { Router } from "express";
import { getUser, updateUser } from "../Services/user.service.js";

const router = Router();

router
	.route("/:email") // TODO cambiar a username cuando lo podamos usar
	.get(getUser) // pantalla perfil usuario
	.patch(updateUser); // pantalla modificar usuario

export default router;
