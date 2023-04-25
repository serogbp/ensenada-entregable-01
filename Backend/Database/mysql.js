import mysql from "mysql2/promise";
import config from "../Settings/config.js";

export const connect = () => {
	const connection = mysql.createConnection({
		host: config.bd.host,
		user: config.bd.user,
		password: config.bd.password,
		database: config.bd.database,
	});

	return connection;
};
