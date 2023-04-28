import { validationResult } from "express-validator";
import { User } from "../Database/Models/User.js";
import { connect } from "../Database/mysql.js";

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
			[user.name, user.surname1, user.surname2, user.username, user.email, user.password, user.age, user.city, user.country, user.studies, user.languages, user.linkedin, user.hobbies, user.role, user.picture]
		);
		connection.end();
		return response.sendStatus(200);
	} catch (error) {
		if (error.code === "ER_DUP_ENTRY") {
			const field = /^.*\'(\w+)\'$/.exec(error.message)[1];

			return response.status(409).json({ msg: `Ya existe un usuario registrado con el ${field} introducido` });
		}
		return response.status(500).json({ msg: "No se ha podido registrar. Por favor, vuelva ha intentarlo mas tarde." });
	}
};
