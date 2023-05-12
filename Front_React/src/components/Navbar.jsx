/* Navbar en el Perfil, modificar perfil, feed, etc */

import SideBarLinks from "./SideBarLinks";

//TODO REVISAR POR QUE NO APARECEN EL BOTON BUSCAR Y SU INPUT

export default function Navbar() {
	return (
		<header className="sticky-top shadow-sm">
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand font-family--jetbrains-mono" href="#">
						{/* <!-- LOGO --> */}
						<strong>//TECLA</strong>_SOCIAL
					</a>
					<button className="w-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<SideBarLinks />
					</div>
				</div>
			</nav>
		</header>
	);
}
