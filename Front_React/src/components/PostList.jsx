import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import PostCreator from "./PostCreator";
import Swal from "sweetalert2";

export default function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		// Cargar los posts
		fetch(`http://localhost:3000/post`, {
			method: "GET",
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					setPosts(body);
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Error al guardar la publicación",
						footer: "Intentelo pasados unos minutos",
					});
				}
			})
			.catch((err) => console.log(err));
	};

	const addPost = (newPost) => {
		fetch(`http://localhost:3000/post`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
			body: JSON.stringify({
				content: newPost,
			}),
		}).then(async (response) => {
			if (response.status === 200) {
				getPosts();
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Error al recuperar los datos",
					footer: "Intentelo pasados unos minutos",
				});
			}
		});
	};

	return (
		<div className="d-flex flex-column gap-4">
			<>
				<PostCreator addPost={addPost} />
				{posts.map((post, index) => (
					<PostListItem post={post} key={index} />
				))}
			</>
		</div>
	);
}
