import { connect } from "../Database/mysql.js";

export const addFeedback = async (request, response) => {
	const giver_id = request.tokenDecoded.user_id;
	const { receiver_id, content, position, relation } = request.body;

	try {
		const connection = await connect();

		const [rows, fields] = await connection.execute(
			`INSERT INTO recomendations ( content, giver_id, receiver_id, position, relation)
			VALUES (?, ?, ?, ?, ?)
			`,
			[content, giver_id, receiver_id, position, relation]
		);
		connection.end();
		return response.sendStatus(200);
	} catch (error) {
		return response.status(500).json({ msg: "Error añadiendo el feedback" });
	}
};

export const getFeedback = async (request, response) => {
	let receiver_id = request.params.id;
	// Si hay user_id es el logeado, si no es el amigo
	if (!receiver_id) {
		receiver_id = request.tokenDecoded.user_id;
	}

	try {
		const connection = await connect();

		const [rows, fields] = await connection.execute(
			`SELECT users.name, users.surname1, users.surname2, recomendations.content, recomendations.relation,
			recomendations.position, recomendations.publishDate FROM
			users
			INNER JOIN recomendations ON  giver_id = user_id
			WHERE receiver_id = ?;
			`,
			[receiver_id]
		);
		connection.end();
		return response.status(200).json(rows);
	} catch (error) {
		return response.status(500).json({ msg: "Error obteniendo los feedback" });
	}
};
