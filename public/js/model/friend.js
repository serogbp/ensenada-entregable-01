import { drawFriends } from "../view/lista-de-amigos.js";

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
	drawFriends(friendsSorted);
};

export const addFriends = (newFriends) => {
	friends = [...newFriends];
	sortFriends();
	drawFriends(friendsSorted);
};

const sortFriends = () => {
	switch (sortType) {
		case SORT_TYPE.MANUAL:
			friendsSorted = [...friends];
			break;
		case SORT_TYPE.NAME:
			friendsSorted = [...friends.sort((a, b) => a.name.first.localeCompare(b.name.first))];
			break;
		case SORT_TYPE.USERNAME:
			friendsSorted = [...friends.sort((a, b) => a.login.username.localeCompare(b.login.username))];
			break;
		default:
			friendsSorted = [...friends];
			break;
	}
};
