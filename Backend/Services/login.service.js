import { validationResult } from "express-validator";
import { connect } from "../Database/mysql.js";

export const isUser = async (request, response) => {
	// Recoger validaciones express-validator
	const validationResults = validationResult(request);
	// Ejemplo formato de los errores que devuelve
	/*
		location: 'body'
		msg: 'Invalid value'
		path: 'email'
		type: 'field'
		value: 'a'
	*/
	if (!validationResults.isEmpty()) {
		return response.status(400).json(validationResults);
	}

	// Recoger del body request email y password
	const { email, password } = request.body;

	// TODO try catch
	const connection = await connect();
	const [rows, fields] = await connection.query("SELECT email, password FROM users");

	const userEmail = rows.find((item) => item.email === email.toLowerCase());
	if (userEmail && userEmail.password === password) {
		response.sendStatus(200);
	} else {
		// ⚠ Si queremos enviar un status custom y un json, tenemos que usar status().
		// Si usamos sendStatus(), no podemos enviar el json porque ya envió la respuesta
		// y vuelve a intentar enviar otra respuesta con el json, crasheando el server
		response.status(404).json([
			{
				msg: "Error en el login",
			},
		]);
	}
	return;
};
