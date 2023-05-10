import jwt from "jsonwebtoken";
import config from "../Settings/config.js";

export function isLogged(req, res, next) {
	let token = req.get("Authorization");
	if (token) {
		jwt.verify(token, config.jwt.clave, (err, tokenDecoded) => {
			if (err) {
				return res.status(401).json({ msg: "Token no valido" });
			}

			if (tokenDecoded) {
				return next();
			}
		});
	}
}
