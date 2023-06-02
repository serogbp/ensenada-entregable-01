import { body, validationResult } from "express-validator";
export const checkUser = [
	body("email").isEmail().escape(),
	body("password").isLength({ max: 10 }).escape(),
	body("name").isLength({ max: 150 }).escape(),
	body("surname1").isLength({ max: 150 }).escape(),
	body("surname2").isLength({ max: 150 }).escape(),
	body("email").isLength({ max: 150 }).escape(),
	body("password").isLength({ max: 150 }).escape(),
	body("age").isLength({ max: 3 }).escape(),
	body("city").isLength({ max: 150 }).escape(),
	body("country").isLength({ max: 150 }).escape(),
	body("studies").isLength({ max: 150 }).escape(),
	body("languages").isLength({ max: 150 }).escape(),
	body("linkedin").isLength({ max: 150 }),
	body("hobbies").isLength({ max: 150 }).escape(),
	body("role").isLength({ max: 150 }).escape(),
	body("picture").isLength({ max: 150 }).escape(),
	(req, res, next) => {
		const validationResults = validationResult(req);
		if (!validationResults.isEmpty()) {
			const fieldNames = validationResults.errors.map((error) => error.path).join();
			return response.status(500).json({ msg: `Error en los siguientes campos: ${fieldNames}` });
		}
		next();
	},
];
