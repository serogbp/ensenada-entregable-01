import { Router } from "express";
import { getUser, updateUSer } from "../Services/user.service.js";

const router = Router();

router
	.route("/:username")
	.get(getUser) // pantalla perfil usuario
	.patch(updateUSer); // pantalla modificar usuario
