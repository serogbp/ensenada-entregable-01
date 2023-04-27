import { validationResult } from "express-validator";
import { User } from "../Database/Models/User.js";
import { connect } from "../Database/mysql.js";

const DEFAULT_PICTURE = "https://img.freepik.com/psd-premium/ilustracion-3d-hombre-caucasico-sonriente-retrato-cerca-dibujos-animados-hombre-caucasico-pie-sobre-fondo-amarillo-avatar-3d-ui-ux_1020-5081.jpg";

export const register = async (request, response) => {
	const validationResults = validationResult(request);
	if (!validationResults.isEmpty()) {
		const fieldNames = validationResults.errors.map((error) => error.path).join();
		return response.status(400).json({ msg: `Error en los siguientes campos: ${fieldNames}` });
	}

	const user = new User(request.body);

	try {
		const connection = await connect();
		await connection.execute(
			`INSERT INTO users (name, surname1, surname2, username, email, password, age, city, country, studies, languages, linkedin, hobbies, role, picture)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
			[user.name, user.surname1, user.surname2, user.username, user.email, user.password, user.age, user.city, user.country, user.studies, user.languages, user.linkedin, user.hobbies, user.role, DEFAULT_PICTURE]
		);
	} catch (error) {
		return response.status(500).json({ msg: "No se ha podido registrar. Por favor, vuelva ha intentarlo mas tarde." });
	}
	return response.sendStatus(200);
};
