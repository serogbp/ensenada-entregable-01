import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { ROUTES } from "../common/enums";
export default function NoAutorizado() {
	return (
		<Layout>
			<div className="container">
				<div className="d-flex flex-column justify-content-center">
					<p className="fs-1 text-center fw-bold">No autorizado</p>
					<p className="fs-3 text-center">
						<Link to={ROUTES.LOGIN}>
							Para ver este enlace necesitas <span className="text-primary">iniciar sesión.</span>
						</Link>
					</p>
					<p className="fs-3 text-center">
						<Link to={ROUTES.REGISTER}>
							Si no tienes cuenta puedes <span className="text-primary">registrarte aquí.</span>
						</Link>
					</p>
				</div>
			</div>
		</Layout>
	);
}
