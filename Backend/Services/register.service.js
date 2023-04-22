export const register = (request, response) => {
	const { email, password } = request.body;

	// Nulos
	if (!email || !passwrod) return response.status(400).json({ msg: "All fields required" });
	// Longitud
	if (email.length > 50) return response.status(400).json({ msg: "Email too long" });
	if (password.length > 10) return response.status(400).json({ msg: "Password too long" });

	// Mail formato valido
	const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!regexMail.test(email)) return response.status(400).json({ msg: "Invalid email" });

	//TODO alamcenar esto en la BD

	return response.status(200);
};
