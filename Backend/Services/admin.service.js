import { connect } from "../Database/mysql.js";

export const getAllUsers = async (request, response) => {
	try {
		const connection = await connect();

		const [rows, fields] = await connection.query("SELECT user_id, name, surname1, surname2, email,username, age, city, country, studies, languages, linkedin, hobbies, role, picture,userType FROM users");
		connection.end();
		if (rows.isEmpty) return response.status(404).json({ msg: "El usuario no existe" });
		return response.status(200).json(rows);
	} catch (err) {
		return response.status(500).json({ msg: `Error obteniendo el usuario: ${err.message}` });
	}
};

export const adminUpdateUser = async (request, response) => {
	const { user_id, email, name, surname1, surname2, username, age, city, country, studies, role, languages, linkedin, hobbies, userType } = request.body;
	try {
		const connection = await connect();
		await connection.query("UPDATE users SET name= ?, surname1 = ?, surname2 = ?,username = ?, age = ?, city = ?, country = ?, studies = ?, role = ?, languages = ?, linkedin = ?, hobbies = ?, email = ?, userType = ? WHERE user_id = ?", [name, surname1, surname2, username, age, city, country, studies, role, languages, linkedin, hobbies, email, userType, user_id]);
		connection.end();
		return response.sendStatus(200);
	} catch (err) {
		return response.status(500).json({ msg: `Error actualizando el usuario: ${err.message}` });
	}
};

export const adminDeleteUser = async (request, response) => {
	const user_id = request.body.user_id;
	try {
		const connection = await connect();
		await connection.query("DELETE FROM users WHERE user_id = ?", [user_id]);
		connection.end();
		return response.sendStatus(200);
	} catch (err) {
		return response.status(500).json({ msg: `Error borrando el usuario: ${err.message}` });
	}
};
