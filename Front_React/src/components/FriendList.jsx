import { useEffect, useState } from "react";
import CreateFriendElement from "./CreateFriendElement";

const SORT_TYPE = Object.freeze({
	MANUAL: "manual",
	NAME: "name",
	USERNAME: "username",
});

export default function FriendList() {
	const [friendList, setFriendList] = useState([]);
	const [sortType, setSortType] = useState("manual");

	useEffect(() => {
		fetch(`http://localhost:3000/user/friends`, {
			method: "GET",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					setFriendList(body);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const sortList = () => {
		switch (sortType) {
			case SORT_TYPE.NAME:
				return [...friendList].sort((a, b) => a.name.localeCompare(b.name));
			case SORT_TYPE.USERNAME:
				return [...friendList].sort((a, b) => a.username.localeCompare(b.username));
			default:
				return friendList;
		}
	};

	return (
		<>
			<div className="d-flex flex-column gap-3">
				<div className="d-flex gap-3 align-items-center">
					<label htmlFor="sort-type">Ordenar por: </label>
					<select id="sort-type" name="sort-type" className="rounded p-1" onChange={(e) => setSortType(e.target.value)}>
						<option value="manual">Por defecto</option>
						<option value="name">Nombre</option>
						<option value="username">Username</option>
					</select>
				</div>
				<p className="h3 mb-1 font-family--jetbrains-mono ">Mis amigos</p>
				<div id="friend-list-wrapper" className="d-flex flex-wrap gap-3">
					{sortList().map((friendData, index) => {
						return <CreateFriendElement friendData={friendData} key={index} />;
					})}
				</div>
			</div>
		</>
	);
}
