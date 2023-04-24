import { connect } from "../Database/mysql.js";

export const getUser = async (request, response) => {
	const email = request.params.email;
	try {
		const connection = await connect();

		const [rows, fields] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);
		if (rows.isEmpty) return response.status(404).json({ msg: "El usuario no existe" });

		const user = rows[0];
		return response.status(200).json(user);
	} catch (err) {
		return response.status(500).json({ msg: `Error actualizando el usuario: ${err.message}` });
	}
};

export const updateUser = async (request, response) => {
	const email = request.params.email;
	const { name, surname1, surname2, username, age, city, country, studies, role, languages, linkedin, hobbies } = request.body;
	try {
		const connection = await connect();
		await connection.query("UPDATE users SET name= ?, surname1 = ?, surname2 = ?, age = ?, city = ?, country = ?, studies = ?, role = ?, languages = ?, linkedin = ?, hobbies = ? WHERE email = ?", [name, surname1, surname2, age, city, country, studies, role, languages, linkedin, hobbies, email]);
		return response.sendStatus(200);
	} catch (err) {
		return response.status(500).json({ msg: `Error actualizando el usuario: ${err.message}` });
	}
};
