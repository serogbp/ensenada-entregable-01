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
		const fieldNames = validationResults.errors.map((error) => error.path).join();
		return response.status(400).json({ msg: `Error en los siguientes campos: ${fieldNames}` });
	}

	// Recoger del body request email y password
	const { email, password } = request.body;

	try {
		const connection = await connect();
		const [rows, fields] = await connection.execute("SELECT email, password FROM users");

		// Comprobar credenciales válidas
		const userEmail = rows.find((item) => item.email === email.toLowerCase());
		if (userEmail && userEmail.password === password) {
			response.sendStatus(200);
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
