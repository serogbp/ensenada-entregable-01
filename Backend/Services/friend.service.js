import { connect } from "../Database/mysql.js";

const FRIEND_STATUS = Object.freeze({
	PENDING: 0,
	ACCEPTED: 1,
	REJECTED: 2,
});

export const friendRequest = async (request, response) => {
	const { sender_id, receptor_id } = request.body;

	try {
		const connection = await connect();

		await connection.execute(
			`INSERT INTO friends (sender_id, receptor_id, status)
			VALUES(?, ?,?)
			`,
			[sender_id, receptor_id, FRIEND_STATUS.PENDING]
		);
	} catch (error) {
		return response.status(500).json({ msg: "Error en la solicitud de amistad" });
	}
	return response.sendStatus(200);
};
