import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="d-flex p-4 bg-black text-white">
			<Link to="/" className="fs-4 navbar-brand font-family--jetbrains-mono">
				<strong>//TECLA</strong>_SOCIAL
			</Link>
		</footer>
	);
}
