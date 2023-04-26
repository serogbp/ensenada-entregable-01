const LIST_WRAPPER = document.getElementById("friend-list-wrapper");

const createFriendElement = (friendData) => {
	const element = document.createElement("div");
	element.classList.add(...["friend-card", "card", "d-flex", "flex-column", "gap-2", "align-items-center"]);
	element.style.width = "2rem";
	element.innerHTML = `
		<img src="${friendData.picture}" alt="${friendData.name} ${friendData.surname1} ${friendData.surname2}" class="avatar"/>
		<div class="doble-texto">
			<p class="text-break">${friendData.name} ${friendData.surname1} ${friendData.surname2} </p>
			<p class="text-break">@${friendData.username}</p>
		</div>
	`;
	return element;
};

export const drawFriends = async (friends) => {
	LIST_WRAPPER.innerHTML = null;
	const fragment = document.createDocumentFragment();

	const elements = friends.map((friend) => createFriendElement(friend));
	elements.forEach((friend) => fragment.appendChild(friend));

	LIST_WRAPPER.appendChild(fragment);
};
