import dotenv from "dotenv";
dotenv.config();

const config = {
	app: {
		port: process.env.SERVER_PORT,
	},

	bd: {
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	},
	jwt: {
		clave: process.env.TOKEN_PASS,
	},
};

export default config;
