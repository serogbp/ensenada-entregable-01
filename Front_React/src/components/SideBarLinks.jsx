import { Link } from "react-router-dom";
import { ROUTES } from "../common/enums";

export default function SideBarLinks() {
	return (
		<ul className="nav-list list-unstyled card text-start">
			<p className="h5 mb-1">Enlaces</p>
			<Link to={ROUTES.FEED}>
				<li>🧾 Feed</li>
			</Link>
			<Link to={ROUTES.PROFILE}>
				<li>🏠 Mi perfil</li>
			</Link>
			<Link to={ROUTES.FRIENDS}>
				<li>💃 Amigos</li>
			</Link>
		</ul>
	);
}
