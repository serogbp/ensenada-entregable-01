import { useEffect, useState } from "react";
import CreateFriendElement from "./CreateFriendElement";

export default function FriendList() {
	const [friendList, setFriendList] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:3000/user/friends`, {
			method: "GET",
			header: {
				Authorization: localStorage.getItem("token"),
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

	return (
		<>
			<div>
				<label htmlFor="sort-type">Ordenar por:</label>
				<select id="sort-type" name="sort-type" className="rounded p-1">
					<option value="manual">Orden de llegada</option>
					<option value="name">Nombre</option>
					<option value="username">Username</option>
				</select>
				<p className="h3 mb-1 font-family--jetbrains-mono">Mis amigos</p>
				<div id="friend-list-wrapper" className="d-flex flex-wrap gap-3">
					{friendList.map((friendData, index) => {
						<CreateFriendElement friendData={friendData} key={index} />;
					})}
				</div>
			</div>
		</>
	);
}
