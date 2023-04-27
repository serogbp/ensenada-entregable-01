import { Router } from "express";
import { askFriend } from "../Services/friend.service";

const router = Router();

// prettier-ignore
router.route("/:receptor_id")
	.post(askFriend);
