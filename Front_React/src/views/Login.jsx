import Layout from "../layouts/Layout";
import "../css/login.css";
import "../css/modificar-perfil-de-usuario.css";

export default function Login() {
	return (
		<Layout>
			<main className="d-flex flex-grow-1 justify-content-center align-items-center bg-tecla-teal">
				{/* <!-- tarjeta datos de usuario --> */}
				<div className="card-login card-user bg-tecla-white shadow p-4">
					<p className="h5 font-family--jetbrains-mono d-flex justify-content-center mb-4">Inicio de sesión</p>
					<div className="d-flex flex-column gap-3">
						<form action="/pages/feed.html" className="d-flex flex-column gap-4">
							<input type="text" className="form-control" id="usuario" placeholder="Usuario" required />
							<input type="password" className="form-control" id="contrasena" placeholder="Contraseña" required />
							<button type="submit" className="btn btn-primary">
								Iniciar sesión
							</button>
						</form>

						<p>
							¿Todavía no estás registrado?
							<a className="link-primary text-decoration-underline" href="/pages/registro.html">
								Registrarse
							</a>
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}
