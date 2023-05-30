import { useEffect, useState } from "react";
import FeedbackCreator from "./FeedbackCreator";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";

FeedbackList.propsTypes = {
	friend_id: PropTypes.string,
};

export default function FeedbackList(props) {
	const [feedback, setFeedback] = useState([]);

	useEffect(() => {
		getFeedback();
	}, [props.friend_id]);

	//add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.receiver_id = props.friend_id;

		fetch(`http://localhost:3000/feedback`, {
			method: "POST",
			headers: {
				Authorization: localStorage.getItem("token"),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ newFeedback: newFeedback }),
		})
			.then(async (response) => {
				if (response.status === 200) {
					// setFeedback([newFeedback, ...feedback]);
					// window.location.reload();
					setFeedback([]);
					getFeedback();
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Error en la publicación!",
						footer: "Revisar los datos introducidos",
					});
				}
			})
			.catch((err) => console.log(err));
	};

	// get feedback
	const getFeedback = () => {
		if (props.friend_id) {
			fetch(`http://localhost:3000/feedback/${props.friend_id}`, {
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
				.then(async (response) => {
					if (response.status === 200) {
						const body = await response.json();
						setFeedback(body);
					} else {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Error al recuperar los datos",
							footer: "Intentelo pasados unos minutos",
						});
					}
				})
				.catch((err) => console.log(err));
		} else {
			fetch(`http://localhost:3000/feedback`, {
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
				.then(async (response) => {
					if (response.status === 200) {
						const body = await response.json();
						setFeedback(body);
					} else {
						const data = await response.json();
						//alert(data.msg);
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Error al recuperar los datos",
							footer: "Intentelo pasados unos minutos",
						});
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className="d-flex flex-column gap-3">
			{props.friend_id && <FeedbackCreator addFeedback={addFeedback} />}
			{feedback.map((item) => (
				<div key={item.id} className="card">
					<p className="fw-bold fs-4 font-family--jetbrains-mono px-3">
						Recomendación de {item.name} {item.surname1} {item.surname2}
					</p>
					<p className="text-muted px-3">Añadido el día {moment(item.publishDate).format("DD [de] MMMM [de] YYYY")}</p>

					<div className="card-body d-flex flex-column gap-1 font-family--jetbrains-mono">
						<div>
							<p className="m-0">Cargo</p>
							<p className="p-2 bg-light">{item.position}</p>
						</div>
						<div>
							<p className="m-0">Relación</p>
							<p className="p-2 bg-light">{item.relation}</p>
						</div>
						<div>
							<p className="m-0">Comentario</p>
							<p className="p-2 bg-light">{item.content}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
