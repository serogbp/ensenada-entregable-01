import { connect } from "../Database/mysql.js";

export const isUser = async (request, response) => {
	//recoger del body request email y password
	const { email, password } = request.body;

	const connection = await connect();
	const [rows, fields] = await connection.query("SELECT * FROM users");

	const userEmail = rows.find((item) => item.email === email.toLowerCase());
	if (userEmail && userEmail.password === password) {
		response.sendStatus(200);
	} else {
		// ⚠ Si queremos enviar un status custom y un json, tenemos que usar status().
		// Si usamos sendStatus(), no podemos enviar el json porque ya envió la respuesta
		// y vuelve a intentar enviar otra respuesta con el json, crasheando el server
		response.status(404).json({
			msg: "Error en el login",
		});
	}
	return;
};
