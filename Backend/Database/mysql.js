import mysql from "mysql2/promise";

export const connect = () => {
	const connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "tecla_db",
	});

	return connection;
};
