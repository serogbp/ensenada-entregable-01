import { connect } from "../Database/mysql.js";
import { validationResult } from "express-validator";

export const getPosts = async (request, response) => {
	const validationResults = validationResult(request);
	if (!validationResults.isEmpty()) {
		const fieldNames = validationResults.errors.map((error) => error.path).join();
		return response.status(400).json({ msg: `Error en los siguientes campos: ${fieldNames}` });
	}

	const user_id = request.params.user_id;
	try {
		const connection = await connect();

		const [rows, fields] = await connection.query(
			`
			SELECT users.name,users.surname1, users.surname2, users.username, users.picture, posts.likes, posts.content, posts.publishDate
			FROM users
			INNER JOIN posts ON posts.user_id = users.user_id
			WHERE posts.user_id = ?
			UNION SELECT  users.name,users.surname1, users.surname2, users.username, users.picture, posts.likes, posts.content, posts.publishDate
			FROM friends
			INNER JOIN posts ON posts.user_id = friends.receptor_id
			INNER JOIN users ON posts.user_id = users.user_id
			WHERE friends.sender_id = ? AND friends.status = 1  ORDER BY publishDate DESC;
		`,
			[user_id, user_id]
		);
		if (rows.isEmpty) return response.status(404).json({ msg: "No hay posts" });
		return response.status(200).json(rows);
	} catch (err) {
		return response.status(500).json({ msg: `Error obteniendo los posts: ${err.message}` });
	}
};

export const savePost = async (request, response) => {
	/* 	const validationResults = validationResult(request);
	if (!validationResults.isEmpty()) {
		const fieldNames = validationResults.errors.map((error) => error.path).join();
		return response.status(400).json({ msg: `Error en los siguientes campos: ${fieldNames}` });
	} */
	const { user_id, content } = request.body;
	try {
		const connection = await connect();
		await connection.execute(`INSERT INTO posts (user_id, content, likes) VALUES (?, ?, 0)`, [user_id, content]);
	} catch (error) {
		return response.status(500).json({ msg: "No se ha podido guardar la publicación. Por favor, vuelva ha intentarlo mas tarde." });
	}
	return response.sendStatus(200);
};

export const saveLike = async (request, response) => {
	const post_id = request.body.post_id;
	try {
		const connection = await connect();
		await connection.execute(`UPDATE posts SET likes = likes + 1 WHERE post_id = ?`, [post_id]);
	} catch (error) {
		return response.status(500).json({ msg: "Error al guardar like" });
	}
	return response.sendStatus(200);
};
