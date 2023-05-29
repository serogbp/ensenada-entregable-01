import jwt from "jsonwebtoken";
import config from "../Settings/config.js";
import { USERTYPE } from "../common/enums.js";

export function isLogged(req, res, next) {
	let token = req.get("Authorization");
	if (token) {
		jwt.verify(token, config.jwt.clave, (err, tokenDecoded) => {
			if (err) {
				return res.status(401).json({ msg: "Token no valido" });
			}

			if (tokenDecoded) {
				// Guardar el token decodificado en el request para los siguientes middleware
				req.tokenDecoded = tokenDecoded;
				return next();
			}
		});
	} else {
		return res.status(401).json({ msg: "Usuario no logeado" });
	}
}

export function isAdmin(req, res, next) {
	let token = req.get("Authorization");

	//2. Comprobaciones
	//   Comprobar si el token existe o no
	if (token !== undefined) {
		//2.1 comprobar si el token es valido
		jwt.verify(token, config.jwt.clave, (err, tokenDecoded) => {
			if (err) {
				return res.status(401).json({ msg: `Token invalido` });
			}
			//2.2 comprobar si el usuario es admin o no
			if (tokenDecoded !== undefined) {
				if (tokenDecoded.userType === USERTYPE.ADMIN) {
					req.userType = tokenDecoded.userType;
					return next();
				} else {
					return res.status(401).json({ msg: `Token invalido` });
				}
			}
		});
	} else {
		return res.status(401).json({ msg: `No se ha encontrado ningun token` });
	}
}
