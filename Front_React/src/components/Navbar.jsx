/* Navbar en el Perfil, modificar perfil, feed, etc */

import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../common/enums";
import { useState } from "react";

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

	const userType = localStorage.getItem("userType");
	if (userType) links.push({ name: "Administrador", route: ROUTES.ADMIN });

	return (
		<nav className="sticky-top shadow-sm navbar navbar-expand-lg p-0">
			{/* Contenido de la Navbar */}
			<div className="container-fluid px-lg-5 bg-tecla-teal py-2 text-light">
				{/* Logo */}
				<Link to={ROUTES.FEED} className="navbar-brand font-family--jetbrains-mono text-light" href="#">
					<strong>//TECLA</strong>_SOCIAL
				</Link>

				{/* Boton 🍔 */}
				<button className="bg-light w-auto navbar-toggler" type="button" onClick={() => setCollapse(!collapse)}>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Contenido que colapsa */}
				<div className={"collapse navbar-collapse justify-content-end" + (collapse ? " show" : "")} id="collapse">
					<ul className="navbar-nav gap-4 align-items-center">
						{links.map((link) => (
							<NavLink to={link.route} key={link.name} className={`p-1 ${({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}`}>
								<li className="nav-link font-family--jetbrains-mono text-light">{link.name}</li>
							</NavLink>
						))}
						<button className="w-auto btn btn-outline-light" onClick={logout}>
							Cerrar sesión
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
}
