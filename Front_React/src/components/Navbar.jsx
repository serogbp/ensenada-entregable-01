/* Navbar en el Perfil, modificar perfil, feed, etc */

import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../common/enums";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function Navbar() {
	const [collapse, setCollapse] = useState(false);
	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		navigate(ROUTES.LOGIN);
	};

	const links = [
		{ name: "Feed", route: ROUTES.FEED },
		{ name: "Mi perfil", route: ROUTES.PROFILE },
		{ name: "Amigos", route: ROUTES.FRIENDS },
	];

	const { user } = useUser();
	if (user.userType === 1) links.push({ name: "Administrador", route: ROUTES.ADMIN });

	return (
		<header className="sticky-top shadow-sm bg-light-subtle">
			<nav className="navbar navbar-expand-lg">
				{/* Contenido de la Navbar */}
				<div className="container-fluid px-lg-5 bg-light-subtle">
					{/* Logo */}
					<Link to={ROUTES.FEED} className="navbar-brand font-family--jetbrains-mono" href="#">
						<strong>//TECLA</strong>_SOCIAL
					</Link>

					{/* Boton 🍔 */}
					<button className="w-auto navbar-toggler" type="button" onClick={() => setCollapse(!collapse)}>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Contenido que colapsa */}
					<div className={"collapse navbar-collapse justify-content-end" + (collapse ? " show" : "")} id="collapse">
						<ul className="navbar-nav gap-4 align-items-center">
							{links.map((link) => (
								<Link to={link.route} key={link.name}>
									<li className="font-family--jetbrains-mono">{link.name}</li>
								</Link>
							))}
							<button className="w-auto btn btn-outline-secondary" onClick={logout}>
								Cerrar sesión
							</button>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
