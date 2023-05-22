import { Router } from "express";
import { createRequest, getFriendRequests, acceptFriend, rejectFriend } from "../Services/friend.service.js";
import { isLogged } from "../Middleware/jwt.middleware.js";

const router = Router();

// prettier-ignore
router.route("/request")
	.post(isLogged, createRequest) // crear solicitud de amistad (pantalla lista de amigos)
	.get(isLogged, getFriendRequests); // obtener todas las solicitudes de usuario logeado (feed)

// prettier-ignore
router.route("/:sender_id/accept")
	.patch(isLogged, acceptFriend); // feed: peticion de amistad. aceptar

// prettier-ignore
router.route("/:sender_id/reject")
	.patch(isLogged, rejectFriend); // feed: peticion de amistad rechazar

export default router;
