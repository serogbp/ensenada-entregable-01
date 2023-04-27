import { connect } from "../Database/mysql.js";
import { validationResult } from "express-validator";

const FRIEND_STATUS = Object.freeze({
	PENDING: 0,
	ACCEPTED: 1,
});

export const getUser = async (request, response) => {
	const user_id = request.params.user_id;
	try {
		const connection = await connect();

		const [rows, fields] = await connection.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
		if (rows.isEmpty) return response.status(404).json({ msg: "El usuario no existe" });

		const user = rows[0];
		return response.status(200).json(user);
	} catch (err) {
		return response.status(500).json({ msg: `Error actualizando el usuario: ${err.message}` });
	}
};

export const updateUser = async (request, response) => {
	const validationResults = validationResult(request);
	if (!validationResults.isEmpty()) {
		const fieldNames = validationResults.errors.map((error) => error.path).join();
		return response.status(400).json({ msg: `Error en los siguientes campos: ${fieldNames}` });
	}

	const user_id = request.params.user_id;
	const { email, name, surname1, surname2, username, age, city, country, studies, role, languages, linkedin, hobbies } = request.body;
	try {
		const connection = await connect();
		await connection.query("UPDATE users SET name= ?, surname1 = ?, surname2 = ?, age = ?, city = ?, country = ?, studies = ?, role = ?, languages = ?, linkedin = ?, hobbies = ?, email = ? WHERE user_id = ?", [name, surname1, surname2, age, city, country, studies, role, languages, linkedin, hobbies, email, user_id]);
		return response.sendStatus(200);
	} catch (err) {
		return response.status(500).json({ msg: `Error actualizando el usuario: ${err.message}` });
	}
};

export const deleteUser = async (request, response) => {
	const user_id = request.params.user_id;
	try {
		const connection = await connect();
		await connection.query("DELETE FROM users WHERE user_id = ?", [user_id]);
		return response.sendStatus(200);
	} catch (err) {
		return response.status(500).json({ msg: `Error borrando el usuario: ${err.message}` });
	}
};

/*
	Obtener amigos de un usuario a partir del user_id del usuario logeado
*/
export const getFriends = async (request, response) => {
	const user_id = request.params.user_id;
	try {
		const connection = await connect();
		const [rows, fields] = await connection.query(
			`
			SELECT users.user_id, users.name, users.surname1, users.surname2, users.picture, users.username
			FROM users
			INNER JOIN friends ON friends.receptor_id = users.user_id
			WHERE friends.sender_id = ? AND friends.status = ?
		`,
			[user_id, FRIEND_STATUS.ACCEPTED]
		);
		return response.status(200).json(rows);
	} catch (error) {
		return response.status(500).json({ msg: `Error obteniendo los usuarios: ${err.message}` });
	}
};

export const getNoFriends = async (request, response) => {
	// const user_id = request.params.user_id;
	// try {
	// 	const connection = await connect();
	// 	const [rows, fields] = await connection.query(
	// 		`
	// 		SELECT users.user_id, users.name, users.surname1, users.surname2, users.picture, users.username
	// 		FROM users
	// 		INNER JOIN friends ON friends.receptor_id = users.user_id
	// 		WHERE friends.sender_id = ? AND friends.status = ?
	// 	`,
	// 		[user_id, FRIEND_STATUS.PENDING]
	// 	);
	// 	return response.status(200).json(rows);
	// } catch (error) {
	// 	return response.status(500).json({ msg: `Error obteniendo los usuarios: ${err.message}` });
	// }
};
