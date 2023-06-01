import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { HeartFill, Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../common/enums";
import "moment/locale/es";
import Swal from "sweetalert2";

PostListItem.propsTypes = {
	post: PropTypes.object.isRequired,
};

export default function PostListItem(props) {
	const { post } = props;
	return (
		<div className="card post rounded-3 py-3 px-4 d-flex flex-column gap-3">
			<Header post={post} />
			<Body post={post} />
			<Footer post={post} />
		</div>
	);
}

function Header({ post }) {
	return (
		<Link to={ROUTES.PROFILE + "/" + post.user_id} className="d-flex justify-content-between align-items-center">
			<div className="d-flex gap-2">
				<img className="avatar" src={post.picture} alt="Imagen del usuario" />
				<div className="doble-texto">
					<p>
						{post.name} {post.surname1} {post.surname2}
					</p>
					<p>@{post.username}</p>
				</div>
			</div>
		</Link>
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
			<p className="text-secondary m-0">{moment(post.publishDate).format("DD MMMM YYYY HH:mm")}</p>
		</div>
	);
}

function LikeCounter({ post }) {
	const [counter, setCounter] = useState(0);
	// La query en el campo has_like devuelve 0 o 1
	// Si es 1, el usuario ya ha dado like, si es 0, el usuario no ha dado like.
	const [isLiked, setIsLiked] = useState(false);
	const [isHover, setIsHover] = useState(false);

	useEffect(() => {
		setCounter(post.total_likes ?? 0);
	}, [post.total_likes]);

	useEffect(() => {
		setIsLiked(Boolean(post.has_like));
	}, [post.has_like]);

	const handleClick = () => {
		if (!isLiked) {
			// Dar like
			fetch(`http://localhost:3000/post/like/${post.post_id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("token")}`,
				},
			})
				.then(async (response) => {
					if (response.status === 200) {
						post.total_likes = counter + 1;
						post.has_like = true;
						setIsHover(false);
					} else {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Error.",
							footer: "Intentelo pasados unos minutos",
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			// Quitar like
			fetch(`http://localhost:3000/post/like/${post.post_id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("token")}`,
				},
			})
				.then(async (response) => {
					if (response.status === 200) {
						post.total_likes = counter - 1;
						post.has_like = false;
						setIsHover(false);
					} else {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Error.",
							footer: "Intentelo pasados unos minutos",
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		// prettier-ignore
		<div onMouseEnter={() => { setIsHover(true); }} onMouseLeave={() => { setIsHover(false); }} onClick={handleClick} className={"d-flex gap-3 align-items-center user-select-none" + (isHover ? " hover-scale-md" : "")}
		>
			{!isLiked && <Heart className="p-0" color={isHover ? "red" : ""} size={18} />}
			{isLiked && <HeartFill color="red" size={18} />}
			<p className="mb-0">{counter === 0 ? "" : counter}</p>
		</div>
	);
}
