import { drawNoFriends } from "../view/lista-de-amigos.js";

let friends = [];
let friendsSorted = [];

const SORT_TYPE = {
	MANUAL: "manual",
	NAME: "name",
	USERNAME: "username",
};
let sortType = SORT_TYPE.MANUAL;

export const getFriends = () => friendsSorted;

export const addFriend = (friend) => {
	friends.push(friend);
	sortFriends();
	drawNoFriends(friendsSorted);
};

export const addFriends = (newFriends) => {
	friends = [...friends, ...newFriends];
	sortFriends();
	drawNoFriends(friendsSorted);
};

export const updateSortType = (type) => {
	sortType = type;
	sortFriends();
	drawNoFriends(friendsSorted);
};

const sortFriends = () => {
	switch (sortType) {
		case SORT_TYPE.MANUAL:
			friendsSorted = [...friends];
			break;
		case SORT_TYPE.NAME:
			friendsSorted = [...friends].sort((a, b) => a.name.localeCompare(b.name));
			break;
		case SORT_TYPE.USERNAME:
			friendsSorted = [...friends].sort((a, b) => a.username.localeCompare(b.username));
			break;
		default:
			friendsSorted = [...friends];
			break;
	}
};

export function fetchNoFriends() {
	const user_id = localStorage.getItem("idLogged");
	fetch(`http://localhost:3000/user/${user_id}/no_friends`, {
		method: "GET",
	}).then(async (response) => {
		if (response.status === 200) {
			const body = await response.json();
			addFriends(body);
		}
	});
}
