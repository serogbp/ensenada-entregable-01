import { validationResult } from "express-validator";
import config from "../Settings/config.js";
import { connect } from "../Database/mysql.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { USERTYPE } from "../common/enums.js";

export const isUser = async (request, response) => {
	// Recoger del body request email y password
	const { email, password } = request.body;

	try {
		const connection = await connect();
		const [rows, fields] = await connection.execute("SELECT email, password, user_id, userType FROM users");
		connection.end();
		// Comprobar credenciales válidas
		const userLogged = rows.find((item) => item.email === email.toLowerCase());

		// Si el usuario es valido, se envia su token
		if (userLogged && bcrypt.compareSync(password, userLogged.password)) {
			const token = jwt.sign({ user_id: userLogged.user_id, userType: userLogged.userType }, config.jwt.clave);
			const responseBody = {
				token: token,
				user_id: userLogged.user_id,
			};
			// Si el usuario es admin, se añade la propiedad userType a la respuesta
			if (userLogged.userType === USERTYPE.ADMIN) responseBody.userType = userLogged.userType;
			return response.status(200).json(responseBody);
		} else {
			// ⚠ Si queremos enviar un status custom y un json, tenemos que usar status().
			// Si usamos sendStatus(), no podemos enviar el json porque ya envió la respuesta
			// y vuelve a intentar enviar otra respuesta con el json, crasheando el server
			response.status(404).json({ msg: "Credenciales no válidas" });
		}
	} catch (error) {
		return response.status(500).json({ msg: "No se ha podido iniciar sesión. Por favor, vuelva ha intentarlo mas tarde." });
	}
	return;
};
