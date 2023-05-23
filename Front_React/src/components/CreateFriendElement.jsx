import { Link } from "react-router-dom";
export default function (props) {
	const { friendData } = props;
	return (
		<Link to={`/profile/${friendData.user_id}`} className="friend-card card d-flex flex-column gap-2 align-items-center" style={{ width: "2rem" }}>
			<img src="${friendData.picture}" alt="${friendData.name} ${friendData.surname1} ${friendData.surname2}" class="avatar" />
			<div class="doble-texto">
				<p class="text-break">
					{friendData.name} {friendData.surname1} {friendData.surname2}
				</p>
				<p class="text-break">@{friendData.username}</p>
			</div>
		</Link>
	);
}

/* element.href = `/pages/perfil-de-usuario.html?user_id=${friendData.user_id}`; */
