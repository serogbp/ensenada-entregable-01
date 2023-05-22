import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import PostCreator from "./PostCreator";

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
					const data = await response.json();
					alert(data.msg);
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
				const data = await response.json();
				alert(data.msg);
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
