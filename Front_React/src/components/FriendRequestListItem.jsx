import { Check, X } from "react-bootstrap-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../common/enums";

FriendRequestListItem.propsTypes = {
	data: PropTypes.object.isRequired,
	acceptRequest: PropTypes.func.isRequired,
	rejectRequest: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
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
	const { data, acceptRequest, rejectRequest } = props;
	return (
		<div className="d-flex flex-column gap-2">
			<Link to={ROUTES.PROFILE + "/" + data.user_id} className="d-flex gap-1">
				<div className="avatar">
					<img src={data.picture} alt={data.name} />
				</div>
				<div className="doble-texto text-start">
					<p className="text-break">
						{data.name} {data.surname1}
					</p>
					<p className="text-break">@{data.username}</p>
				</div>
			</Link>
			<div>
				<div className={"d-flex gap-2 "}>
					<button
						onClick={() => {
							acceptRequest(data.user_id);
						}}
						id="buttonAccept"
						className="btn btn-outline-primary btn-sm p-0 w-25 "
					>
						<Check size={24} />
					</button>
					<button
						onClick={() => {
							rejectRequest(data.user_id);
						}}
						id="buttonReject"
						className="btn btn-outline-danger btn-sm p-0 w-25 "
					>
						<X size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}
