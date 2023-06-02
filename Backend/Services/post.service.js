import { connect } from "../Database/mysql.js";
import { validationResult } from "express-validator";

export const getPosts = async (request, response) => {
	const user_id = request.tokenDecoded.user_id;
	try {
		const connection = await connect();

		const [rows, fields] = await connection.query(
			`
			SELECT users.user_id, users.name, users.surname1, users.surname2, users.username, users.picture, posts.content, posts.publishDate, posts.post_id, likes.total_likes,
				CASE WHEN reactions.user_id = ? THEN 1 ELSE 0 END AS has_like
			FROM users
			INNER JOIN posts ON posts.user_id = users.user_id
			LEFT JOIN (
				SELECT post_id, COUNT(*) AS total_likes
				FROM reactions
				GROUP BY post_id
			) AS likes ON likes.post_id = posts.post_id
			LEFT JOIN reactions ON reactions.post_id = posts.post_id AND reactions.user_id = ?
			WHERE posts.user_id = ?
			UNION
			SELECT users.user_id, users.name, users.surname1, users.surname2, users.username, users.picture, posts.content, posts.publishDate, posts.post_id, likes.total_likes,
				CASE WHEN reactions.user_id = ? THEN 1 ELSE 0 END AS has_like
			FROM friends
			INNER JOIN posts ON posts.user_id = friends.receptor_id
			INNER JOIN users ON posts.user_id = users.user_id
			LEFT JOIN (
				SELECT post_id, COUNT(*) AS total_likes
				FROM reactions
				GROUP BY post_id
			) AS likes ON likes.post_id = posts.post_id
			LEFT JOIN reactions ON reactions.post_id = posts.post_id AND reactions.user_id = ?
			WHERE friends.sender_id = ? AND friends.status = 1
			ORDER BY publishDate DESC;
		`,
			[user_id, user_id, user_id, user_id, user_id, user_id]
		);
		connection.end();
		if (rows.isEmpty) return response.status(404).json({ msg: "No hay posts" });
		return response.status(200).json(rows);
	} catch (err) {
		return response.status(500).json({ msg: `Error obteniendo los posts: ${err.message}` });
	}
};

export const savePost = async (request, response) => {
	const { content } = request.body;
	const user_id = request.tokenDecoded.user_id;
	try {
		const connection = await connect();
		await connection.execute(`INSERT INTO posts (user_id, content) VALUES (?, ?)`, [user_id, content]);
		connection.end();
	} catch (error) {
		return response.status(500).json({ msg: "No se ha podido guardar la publicación. Por favor, vuelva ha intentarlo mas tarde." });
	}
	return response.sendStatus(200);
};

export const saveLike = async (request, response) => {
	const post_id = request.params.post_id;
	const user_id = request.tokenDecoded.user_id;

	try {
		const connection = await connect();
		await connection.execute(`INSERT INTO reactions (post_id, user_id) VALUES (?,?)`, [post_id, user_id]);
		connection.end();
	} catch (error) {
		return response.status(500).json({ msg: "Error al guardar like" });
	}
	return response.sendStatus(200);
};

export const deleteLike = async (request, response) => {
	const post_id = request.params.post_id;
	const user_id = request.tokenDecoded.user_id;

	try {
		const connection = await connect();
		await connection.execute(`DELETE FROM reactions WHERE post_id = ? AND user_id = ?`, [post_id, user_id]);
		connection.end();
	} catch (error) {
		return response.status(500).json({ msg: "Error al quitar like" });
	}
	return response.sendStatus(200);
};
