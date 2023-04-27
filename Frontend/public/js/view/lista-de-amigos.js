const LIST_WRAPPER = document.getElementById("friend-list-wrapper");
const LIST_WRAPPER_NO_FRIENDS = document.getElementById("no-friend-list-wrapper");

const createFriendElement = (friendData) => {
	const element = document.createElement("a");
	element.classList.add(...["friend-card", "card", "d-flex", "flex-column", "gap-2", "align-items-center"]);
	element.style.width = "2rem";
	element.innerHTML = `
		<img src="${friendData.picture}" alt="${friendData.name} ${friendData.surname1} ${friendData.surname2}" class="avatar"/>
		<div class="doble-texto">
			<p class="text-break">${friendData.name} ${friendData.surname1} ${friendData.surname2} </p>
			<p class="text-break">@${friendData.username}</p>
		</div>
	`;
	element.href = `/pages/perfil-de-usuario.html?user_id=${friendData.user_id}`;
	return element;
};

export const drawFriends = async (friends) => {
	LIST_WRAPPER.innerHTML = null;
	const fragment = document.createDocumentFragment();

	const elements = friends.map((friend) => createFriendElement(friend));
	elements.forEach((friend) => fragment.appendChild(friend));

	LIST_WRAPPER.appendChild(fragment);
};

const createNoFriendElement = (friendData) => {
	const element = document.createElement("div");
	element.classList.add(...["friend-card", "card", "d-flex", "flex-column", "gap-2", "align-items-center"]);
	element.style.width = "2rem";
	element.innerHTML = `
		<a href="${`/pages/perfil-de-usuario.html?user_id=${friendData.user_id}`}">
			<img src="${friendData.picture}" alt="${friendData.name} ${friendData.surname1} ${friendData.surname2}" class="avatar"/>
			<div class="doble-texto">
				<p class="text-break">${friendData.name} ${friendData.surname1} ${friendData.surname2} </p>
				<p class="text-break">@${friendData.username}</p>
			</div>
		</a>
	`;

	const button = document.createElement("button");

	if (friendData.status === 0) {
		button.classList.add("btn", "btn-success");
		button.textContent = "Pendiente";
		button.disabled = true;
	} else {
		button.classList.add("btn", "btn-primary");
		button.textContent = "Solicitar amistad";
		// button.addEventListener("click", friendRequest);
		button.addEventListener("click", () => alert("Solicitar amistad"));
	}

	element.appendChild(button);

	return element;
};

export const drawNoFriends = async (noFriends) => {
	LIST_WRAPPER_NO_FRIENDS.innerHTML = null;
	const fragment = document.createDocumentFragment();

	const elements = noFriends.map((friend) => createNoFriendElement(friend));
	elements.forEach((friend) => fragment.appendChild(friend));

	LIST_WRAPPER_NO_FRIENDS.appendChild(fragment);
};

// const friendRequest = (friendData) => {
// 	// TODO el param cual?????
// 	fetch(`http://localhost:3000/user/${friendData.user_id}/no_friends`, {
// 		method: "POST",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify({
// 			// TODO el body cual?????
// 			sender_id: localStorage.getItem("idLogged"),
// 			receiver_id: friendData.user_id,
// 		}),
// 	})
// 		.then(async (response) => {
// 			if (response.ok) {
// 				location.reload();
// 			} else {
// 				const result = await response.json();
// 				alert(result);
// 			}
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };
