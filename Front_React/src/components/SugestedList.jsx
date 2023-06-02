import { useEffect, useState } from "react";
import CreateSugestedList from "./CreateSugestedList";

export default function SugestedList() {
	const [sugestedList, setSugestedList] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/user/no_friends`, {
			method: "GET",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					setSugestedList(body);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div className="d-flex flex-column gap-3">
				<p className="h3 mb-1 font-family--jetbrains-mono">Sugerencias de amistad</p>
				<div id="no-friend-list-wrapper" className="d-flex flex-wrap gap-3">
					{sugestedList.map((sugestedData, index) => {
						return <CreateSugestedList sugestedData={sugestedData} key={index} />;
					})}
				</div>
			</div>
		</>
	);
}
