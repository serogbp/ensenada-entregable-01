/* Navbar en el Perfil, modificar perfil, feed, etc */

import { Link } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";
import { ROUTES } from "../common/enums";

export default function Navbar() {
	return (
		<header className="sticky-top shadow-sm">
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid px-lg-5">
					<Link to={ROUTES.FEED} className="navbar-brand font-family--jetbrains-mono" href="#">
						{/* <!-- LOGO --> */}
						<strong>//TECLA</strong>_SOCIAL
					</Link>
					<button className="w-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav d-none d-lg-flex gap-4 font-family--jetbrains-mono">
							<Link to={ROUTES.FEED}>
								<li>Feed</li>
							</Link>
							<Link to={ROUTES.PROFILE}>
								<li>Mi perfil</li>
							</Link>
							<Link to={ROUTES.FRIENDS}>
								<li>Amigos</li>
							</Link>
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
