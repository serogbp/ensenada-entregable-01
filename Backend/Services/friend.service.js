import { connect } from "../Database/mysql.js";

const FRIEND_STATUS = Object.freeze({
	PENDING: 0,
	ACCEPTED: 1,
});

/*
	Obtiene todas las solicitudes de amistad del usuario logeado (token valido)
*/
export const getFriendRequests = async (request, response) => {
	const receptor_id = request.tokenDecoded.user_id;

	try {
		const connection = await connect();

		const [rows, fields] = await connection.execute(
			`SELECT friends.receptor_id, users.user_id, users.username, users.name, users.surname1, users.surname2, users.picture
			FROM users
			INNER JOIN friends ON friends.sender_id = users.user_id
			WHERE friends.receptor_id = ? AND friends.status = ?;
			`,
			[receptor_id, FRIEND_STATUS.PENDING]
		);
		connection.end();
		return response.status(200).json(rows);
	} catch (error) {
		return response.status(500).json({ msg: "Error en la solicitud de amistad" });
	}
};

export const createRequest = async (request, response) => {
	const sender_id = request.tokenDecoded.user_id;
	const receptor_id = request.body.receptor_id;

	try {
		const connection = await connect();

		await connection.execute(
			`INSERT INTO friends (sender_id, receptor_id, status)
			VALUES(?, ?,?)
			`,
			[sender_id, receptor_id, FRIEND_STATUS.PENDING]
		);
		connection.end();
	} catch (error) {
		return response.status(500).json({ msg: "Error en la solicitud de amistad" });
	}
	return response.sendStatus(200);
};

export const acceptFriend = async (request, response) => {
	const sender_id = request.params.sender_id;
	const receptor_id = request.tokenDecoded.user_id;
	try {
		const connection = await connect();

		await connection.execute(
			`UPDATE friends SET friends.status = ? WHERE friends.sender_id = ? AND friends.receptor_id = ?
			`,
			[FRIEND_STATUS.ACCEPTED, sender_id, receptor_id]
		);

		await connection.execute(
			`INSERT INTO friends (sender_id, receptor_id, status)
			VALUES(?, ?,?)
			`,
			[receptor_id, sender_id, FRIEND_STATUS.ACCEPTED]
		);
		connection.end();
	} catch (error) {
		return response.status(500).json({ msg: "Error en la solicitud de amistad" });
	}
	return response.sendStatus(200);
};

export const rejectFriend = async (request, response) => {
	const sender_id = request.params.sender_id;
	const receptor_id = request.tokenDecoded.user_id;
	try {
		const connection = await connect();

		await connection.execute(
			`
				DELETE 	FROM friends
				WHERE friends.sender_id = ? AND friends.receptor_id = ?
			`,
			[sender_id, receptor_id]
		);
		connection.end();
	} catch (error) {
		return response.status(500).json({ msg: "Error en la solicitud de amistad" });
	}
	return response.sendStatus(200);
};
