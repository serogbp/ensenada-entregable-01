/* Navbar en el Perfil, modificar perfil, feed, etc */

import { Link } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";
import { ROUTES } from "../common/enums";

export default function Navbar() {
	const links = [
		{ name: "Feed", route: ROUTES.FEED },
		{ name: "Mi perfil", route: ROUTES.PROFILE },
		{ name: "Amigos", route: ROUTES.FRIENDS },
	];

	return (
		<header className="sticky-top shadow-sm bg-light-subtle">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid px-lg-5 bg-light-subtle">
					<Link to={ROUTES.FEED} className="navbar-brand font-family--jetbrains-mono" href="#">
						{/* <!-- LOGO --> */}
						<strong>//TECLA</strong>_SOCIAL
					</Link>
					<button className="w-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav d-none d-lg-flex gap-4 align-items-center">
							{links.map((link) => (
								<Link to={link.route} key={link.name}>
									<li className="font-family--jetbrains-mono">{link.name}</li>
								</Link>
							))}
						</ul>

						<div className="d-lg-none">
							<SideBarLinks />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
