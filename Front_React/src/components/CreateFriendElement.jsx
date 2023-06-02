import { Link } from "react-router-dom";

export default function CreateFriendElement(props) {
	const { friendData } = props;
	return (
		<Link to={`/profile/${friendData.user_id}`} className="friend-card card d-flex flex-column gap-2 align-items-center hover-scale" style={{ width: "2rem" }}>
			<img src={friendData.picture} alt={`${friendData.name} ${friendData.surname1} ${friendData.surname2}`} className="avatar" />
			<div className="doble-texto">
				<p className="text-break">
					{friendData.name} {friendData.surname1} {friendData.surname2}
				</p>
				<p className="text-break">@{friendData.username}</p>
			</div>
		</Link>
	);
}
