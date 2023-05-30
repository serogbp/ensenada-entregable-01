import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateSugestedList(props) {
	const { sugestedData } = props;
	const [friendReq, setFriendReq] = useState(sugestedData.status);

	function friendRequest() {
		fetch(`http://localhost:3000/friend/request`, {
			method: "POST",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ receptor_id: sugestedData.user_id }),
		})
			.then(async (response) => {
				if (response.status === 200) {
					setFriendReq(0);
				}
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className="friend-card card d-flex flex-column gap-2 align-items-center justify-content-between " style={{ width: "2rem" }}>
			<Link to={`/profile/${sugestedData.user_id}`} className=" d-flex flex-column gap-2 align-items-center">
				<img src={sugestedData.picture} alt={`${sugestedData.name} ${sugestedData.surname1} ${sugestedData.surname2}`} className="avatar" />
				<div className="doble-texto">
					<p className="text-break">
						{sugestedData.name} {sugestedData.surname1} {sugestedData.surname2}
					</p>
					<p className="text-break">@{sugestedData.username}</p>
				</div>
			</Link>
			<div>
				{friendReq === 0 && (
					<button className="btn btn-success" disabled>
						Pendiente
					</button>
				)}
				{friendReq == null && (
					<button className="btn btn-primary" onClick={friendRequest}>
						Solicitar Amistad
					</button>
				)}
			</div>
		</div>
	);
}
