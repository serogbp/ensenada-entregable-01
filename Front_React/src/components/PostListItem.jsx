import moment from "moment";
import PropTypes from "prop-types";
import { useState } from "react";
import { HeartFill, Heart } from "react-bootstrap-icons";

PostListItem.propsTypes = {
	post: PropTypes.object.isRequired,
};

export default function PostListItem(props) {
	const { post } = props;
	return (
		<div className="card post rounded-3 py-3 px-4 d-flex flex-column gap-3 bg-light-subtle">
			<Header post={post} />
			<Body post={post} />
			<Footer post={post} />
		</div>
	);
}

function Header({ post }) {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<div className="d-flex gap-4">
				<img className="avatar" src={post.picture} alt="Imagen del usuario" />
				<div className="doble-texto">
					<p>
						{post.name} {post.surname1} {post.surname2}
					</p>
					<p>@{post.username}</p>
				</div>
			</div>
		</div>
	);
}

function Body({ post }) {
	return (
		<div className="d-flex flex-column gap-2 mt-2">
			<p className="m-0 text-start">{post.content}</p>
		</div>
	);
}

function Footer({ post }) {
	return (
		<div className="d-flex gap-3 align-items-center justify-content-between">
			<LikeCounter post={post} />
			<p className="text-secondary m-0">{moment(post.publishDate).format("MMM DD HH:ss")}</p>
		</div>
	);
}

function LikeCounter({ post }) {
	const [counter, setCounter] = useState(post.total_likes);
	// TODO query para saber si esta likeado por el usuario logeado
	const [isLiked, setIsLiked] = useState(false);
	const [isHover, setIsHover] = useState(false);

	const handleClick = () => {
		setCounter(!isLiked ? counter + 1 : counter - 1);

		if (!isLiked) {
			fetch(`http://localhost:3000/post/like/${post.post_id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("token")}`,
				},
			})
				.then(async (response) => {
					if (response.status === 200) {
						setIsLiked(true);
					} else {
						const data = await response.json();
						alert(data.msg);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			fetch(`http://localhost:3000/post/like/${post.post_id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("token")}`,
				},
			})
				.then(async (response) => {
					if (response.status === 200) {
						setIsLiked(false);
					} else {
						const data = await response.json();
						alert(data.msg);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		// prettier-ignore
		<div onMouseEnter={() => { setIsHover(true); }} onMouseLeave={() => { setIsHover(false); }} onClick={handleClick} className="d-flex gap-3 align-items-center user-select-none"
		>
			{!isLiked && <Heart className="p-0" color={isHover ? "red" : ""} size={18} />}
			{isLiked && <HeartFill color="red" size={18} />}
			<p className="mb-0">{counter}</p>
		</div>
	);
}
