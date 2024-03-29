/*Layout para perfil, modificar perfil, feedm etc*/

import ScrollToTop from "../common/ScrollOnTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NoAutorizado from "../views/NoAutorizado";

export default function MainLayout(props) {
	// Si no esta logeado, mostrar view de error
	const token = localStorage.getItem("token");
	return token ? (
		<div className="d-flex flex-column min-vh-100 bg-body-tertiary" id="main-layout">
			<ScrollToTop />
			<Navbar />
			<main className="py-4 d-flex flex-column flex-grow-1">{props.children}</main>
			<Footer />
		</div>
	) : (
		<NoAutorizado />
	);
}
