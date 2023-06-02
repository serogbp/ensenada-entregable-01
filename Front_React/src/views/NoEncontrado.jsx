import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { ROUTES } from "../common/enums";

export default function NoEncontrado() {
	const token = localStorage.getItem("token");

	// Si esta logeado, redirigir al feed. Si no redirigir al login
	let route;
	if (token) route = ROUTES.FEED;
	else route = ROUTES.LOGIN;

	return (
		<Layout>
			<div className="container">
				<div className="d-flex flex-column justify-content-center">
					<p className="fs-1 text-center fw-bold">Oops, algo salió mal.</p>
					<p className="fs-3 text-center">Parece que esta página se fue de vacaciones.</p>
					<p className="fs-3 text-center">
						Puedes volver al inicio pulsando{" "}
						<Link to={route} className="text-primary">
							aquí.
						</Link>
					</p>
				</div>
			</div>
		</Layout>
	);
}
