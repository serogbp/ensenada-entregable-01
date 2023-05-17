import { Check, X } from "react-bootstrap-icons";
import { useState } from "react";
import PropTypes from "prop-types";

FriendRequestListItem.propsTypes = {
	data: PropTypes.object.isRequired,
	acceptRequest: PropTypes.func.isRequired,
	rejectRequest: PropTypes.func.isRequired,
};
/*
{
	name: 'Sarah '
	picture: 'https://randomuser.me/api/portraits/women/25.jpg'
	receptor_id: 2
	surname1: 'King'
	surname2: 'King'
	user_id: 1
	username: 'beautifulfrog544'
} */
export default function FriendRequestListItem(props) {
	const [hover, setHover] = useState(false);
	const { data, acceptRequest, rejectRequest } = props;

	const visible = hover ? "d-block" : "d-none";

	return (
		<div className="d-flex flex-column gap-2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<div className="d-flex gap-1">
				<div className="avatar">
					<img src={data.picture} alt={data.name} />
				</div>
				<div className="doble-texto text-start">
					<p className="text-break">
						{data.name} {data.surname1}
					</p>
					<p className="text-break">@{data.username}</p>
				</div>
			</div>
			<div className={"d-flex gap-2 justify-content-between " + visible} style={{ transition: "all 0.1s ease-in-out" }}>
				<button
					onClick={() => {
						acceptRequest(data.user_id);
					}}
					id="buttonAccept"
					className="btn btn-outline-primary "
				>
					<Check size={32} />
				</button>
				<button
					onClick={() => {
						rejectRequest(data.user_id);
					}}
					id="buttonReject"
					className="btn btn-outline-danger "
				>
					<X size={32} />
				</button>
			</div>
		</div>
	);
}
