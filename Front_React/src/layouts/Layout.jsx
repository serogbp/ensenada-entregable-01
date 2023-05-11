import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout(props) {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}
