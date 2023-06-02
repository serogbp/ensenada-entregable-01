import { validationResult } from "express-validator";
import { User } from "../Database/Models/User.js";
import { connect } from "../Database/mysql.js";
import bcrypt from "bcrypt";

export const register = async (request, response) => {
	const user = new User(request.body);
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

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
