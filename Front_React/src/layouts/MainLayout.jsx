/*Layout para perfil, modificar perfil, feedm etc*/

import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
	return (
		<div className="d-flex flex-column min-vh-100" id="main-layout">
			<Navbar />
			<main className="py-4 d-flex flex-column flex-grow-1">{props.children}</main>
			<Footer />
			<BottomNavbar />
		</div>
	);
}
