import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<nav className="navbar p-4 navbar-expand-lg bg-white">
				<Link to="/" className="fs-3 navbar-brand font-family--jetbrains-mono">
					<strong>//TECLA</strong>_SOCIAL
				</Link>
			</nav>
		</header>
	);
}
