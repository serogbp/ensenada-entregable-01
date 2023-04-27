import { Router } from "express";
import { friendRequest } from "../Services/friend.service.js";

const router = Router();

// prettier-ignore
router.route("/")
	.post(friendRequest);
// prettier-ignore
/* router.route("/:receptor_id")
	.patch(acceptFriend); */

export default router;
