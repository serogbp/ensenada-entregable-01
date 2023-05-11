/*Layout para perfil, modificar perfil, feedm etc*/

import BottonNavbar from "../components/BottonNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
			<BottonNavbar />
		</>
	);
}
