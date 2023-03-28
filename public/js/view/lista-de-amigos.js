const LIST_WRAPPER = document.getElementById("friend-list-wrapper");

const createFriendElement = (friendInfo) => {
	const element = document.createElement("div");
	element.classList.add(...["friend-card", "card", "d-flex", "flex-column", "gap-2", "align-items-center"]);
	element.innerHTML = `
		<img src="${friendInfo.picture.large}" alt="${friendInfo.name.first} ${friendInfo.name.last}" class="avatar"/>
		<div class="doble-texto">
			<p>${friendInfo.name.first} ${friendInfo.name.last}</p>
			<p>@${friendInfo.login.username}</p>
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
