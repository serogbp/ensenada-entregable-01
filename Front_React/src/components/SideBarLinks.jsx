import { Link } from "react-router-dom";
import { ROUTES } from "../common/enums";

export default function SideBarLinks() {
	const links = [
		{
			title: "🧾 Feed",
			link: ROUTES.FEED,
		},
		{
			title: "🏠 Mi perfil",
			link: ROUTES.PROFILE,
		},
		{
			title: "💃 Amigos",
			link: ROUTES.FRIENDS,
		},
	];

	return (
		<ul className="nav-list list-unstyled card text-start">
			<p className="font-family--jetbrains-mono h5 mb-1">Enlaces</p>
			{links.map((link) => (
				<Link to={link.link} key={link.title} className="hover-scale">
					<li>{link.title}</li>
				</Link>
			))}
		</ul>
	);
}
