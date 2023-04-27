import { renderElements } from "../view/feed/friendRequest.js";

let requests = [];

export const getRequests = () => requests;

export const addRequests = (newRequests) => {
	requests = [...requests, ...newRequests];
	renderElements(requests);
};

export function fetchRequest(sender_id, receptor_id) {
	fetch(`http://localhost:3000/friend/${sender_id}/`, {
		method: "GET",
		body: {
			receptor_id: receptor_id,
		},
	})
		.then(async (response) => {
			if (response.status === 200) {
				location.reload();
			}
		})
		.catch((error) => console.log(error));
}

export function acceptRequest(sender_id, receptor_id) {
	fetch(`http://localhost:3000/friend/${sender_id}/accept`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ receptor_id: receptor_id }),
	})
		.then(async (response) => {
			if (response.status === 200) {
				location.reload();
			}
		})
		.catch((error) => console.log(error));
}

export function rejectRequest(sender_id, receptor_id) {
	fetch(`http://localhost:3000/friend/${sender_id}/reject`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ receptor_id: receptor_id }),
	})
		.then(async (response) => {
			if (response.status === 200) {
				location.reload();
			}
		})
		.catch((error) => console.log(error));
}
