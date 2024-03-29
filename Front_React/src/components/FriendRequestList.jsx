import { useEffect, useState } from "react";
import FriendRequestListItem from "./FriendRequestListItem";
import Swal from "sweetalert2";

export default function FriendRequestList() {
	const [friendRequests, setFriendRequests] = useState([]);

	useEffect(() => {
		// Cargar las peticiones de amistad
		fetch(`http://localhost:3000/friend/request`, {
			method: "GET",
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					setFriendRequests(body);
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Error en la solicitud",
						footer: "Intentelo pasados unos minutos",
					});
				}
			})
			.catch((err) => console.log(err));
	}, []);

	const acceptRequest = (sender_id) => {
		fetch(`http://localhost:3000/friend/${sender_id}/accept`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					removeRequest(sender_id);
				}
			})
			.catch((error) => console.log(error));
	};

	const rejectRequest = (sender_id) => {
		fetch(`http://localhost:3000/friend/${sender_id}/reject`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					removeRequest(sender_id);
				}
			})
			.catch((error) => console.log(error));
	};

	// user_id === sender_id
	const removeRequest = (user_id) => {
		const temp = friendRequests.filter((request) => request.user_id !== user_id);
		setFriendRequests(temp);
	};

	return (
		<div className="list-unstyled card text-start">
			<p className="h5 pb-4 mb-1 font-family--jetbrains-mono px-0">Peticiones de amistad</p>
			<div id="friendRequests" className="d-flex flex-lg-column flex-wrap gap-4 ">
				{
					// Si no hay peticiones de amistad, mostrar un mensaje
					// prettier-ignore
					friendRequests.length > 0 ?
					friendRequests.map((friendRequest, index) => (
						<FriendRequestListItem data={friendRequest} acceptRequest={acceptRequest} rejectRequest={rejectRequest} key={index} index={index}/>
					)) :
					<p>No hay peticiones de amistad</p>
				}
			</div>
		</div>
	);
}
