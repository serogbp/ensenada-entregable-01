import { Router } from "express";

const router = Router();

router.route("/").get(async (request, response) => {
	console.log("hola desde el servidor");
	/* 	response.json({ msg: "aaaaaa" }); */
	const ms = { ms: "ms ms msmsmsms" };
	response.status(200).json({ ms: "ms ms msmsmsms" });
});

export default router;
