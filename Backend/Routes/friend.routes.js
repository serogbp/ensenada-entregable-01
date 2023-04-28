import { Router } from "express";
import { createRequest, getRequest, acceptFriend, rejectFriend } from "../Services/friend.service.js";

const router = Router();

// prettier-ignore
router.route("/")
	.post(createRequest) // crear solicitud de amistad

// prettier-ignore
router.route("/:user_id")
	.get(getRequest); // obtener todas las solicitudes de usuario logeado

// prettier-ignore
router.route("/:sender_id/accept")
	.patch(acceptFriend); // feed: peticion de amistad. aceptar

// prettier-ignore
router.route("/:sender_id/reject")
	.patch(rejectFriend); // feed: peticion de amistad rechazar

export default router;
