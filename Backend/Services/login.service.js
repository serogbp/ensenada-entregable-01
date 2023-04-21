import { users } from "../Database/users-data.js";

export const isUser = (request, response) => {
	//recoger del body request email y password
	const { email, password } = request.body;
	console.log(request.body);
	const userEmail = users.find((item) => item.email === email.toLowerCase());
	/* 	const userPassword = users.find((item) => item.password === password); */
	//comparar con los datsos de user-data
	if (userEmail && userEmail.password === password) {
		response.sendStatus(200);
	} else
		response.sendStatus(404).json({
			msg: "Error en el login",
		});

	//TODO buscar contra la BD
};
