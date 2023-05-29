import { connect } from "../Database/mysql.js";

export const getAllUsers = async (request, response) => {
	try {
		const connection = await connect();

		const [rows, fields] = await connection.query("SELECT name, surname1, surname2, email, age, city, country, studies, languages, linkedin, hobbies, role, picture FROM users");
		connection.end();
		if (rows.isEmpty) return response.status(404).json({ msg: "El usuario no existe" });
		return response.status(200).json(rows);
	} catch (err) {
		return response.status(500).json({ msg: `Error obteniendo el usuario: ${err.message}` });
	}
};

export const adminUpdateUser = async (req, res) => {};

export const adminDeleteUser = async (req, res) => {};
