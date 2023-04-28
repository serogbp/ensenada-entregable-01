import { acceptRequest, rejectRequest } from "../../model/friendRequest.js";

const FRIEND_REQUEST = document.getElementById("friendRequests");

const createElement = (data) => {
	const element = document.createElement("div");
	element.classList.add("d-flex", "flex-column", "gap-2");
	element.innerHTML = `
		<div class="d-flex gap-4">
			<div class="avatar">
				<img src="${data.picture}" alt="${data.name}">
			</div>
			<div class="doble-texto">
				<p class="text-break">${data.name} ${data.surname1}</p>
				<p class="text-break">@${data.username}</p>
			</div>
		</div>
		<div class="d-flex gap-4">
			<button id="buttonAccept" class="btn btn-outline-primary rounded-circle">
				<i class="bi bi-check-lg"></i>
			</button>
			<button id="buttonReject" class="btn btn-outline-danger rounded-circle">
				<i class="bi bi-x-lg"></i>
			</button>
		</div>
	`;

	const buttonAccept = element.querySelector("#buttonAccept");
	const buttonReject = element.querySelector("#buttonReject");

	buttonAccept.addEventListener("click", () => {
		acceptRequest(data.user_id, data.receptor_id);
	});
	buttonReject.addEventListener("click", () => {
		rejectRequest(data.user_id, data.receptor_id);
	});

	return element;
};

export const renderElements = (data) => {
	FRIEND_REQUEST.innerHTML = null;

	const fragment = document.createDocumentFragment();
	data.forEach((item) => {
		const element = createElement(item);
		fragment.appendChild(element);
	});

	FRIEND_REQUEST.appendChild(fragment);
};
