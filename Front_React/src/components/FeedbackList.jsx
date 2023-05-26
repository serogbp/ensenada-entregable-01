import { useEffect, useState } from "react";
import FeedbackCreator from "./FeedbackCreator";
import PropTypes from "prop-types";

FeedbackList.propsTypes = {
	friend_id: PropTypes.string,
};

export default function FeedbackList(props) {
	const [feedback, setFeedback] = useState([]);

	useEffect(() => {
		getFeedback();
	}, []);

	//add feedback
	const addFeedback = (newFeedback) => {};

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
						const data = await response.json();
						alert(data.msg);
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
						alert(data.msg);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className="d-flex flex-column gap-3">
			{props.friend_id && <FeedbackCreator />}
			{feedback.map((item) => (
				<div key={item.id} className="card">
					<p className="fw-bold fs-4">
						Recomendación de {item.name} {item.surname1} {item.surname2}
					</p>
					<div className="card-body d-flex flex-column gap-3">
						<p>{item.position}</p>
						<p>{item.relation}</p>
						<p>{item.content}</p>
					</div>
				</div>
			))}
		</div>
	);
}
