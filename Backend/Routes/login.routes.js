import { Router } from "express";
import { isUser } from "../Services/login.service.js";

const router = Router();

router.route("/").post(isUser);

export default router;
