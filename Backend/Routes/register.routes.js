import { Router } from "express";
import { register } from "../Services/register.service.js";

const router = Router();

router.route("/").post(register);

export default router;
