import Layout from "../layouts/Layout";
import CardForm from "../components/CardForm";

export default function Login() {
	return (
		<Layout>
			<main className="d-flex flex-grow-1 justify-content-center align-items-center bg-tecla-teal">
				{/* TODO : Implementar handleSubmit del formulario */}
				<CardForm title={"Iniciar sesión"} handleSubmit={() => {}}>
					<input type="text" className="form-control" id="usuario" placeholder="Usuario" required />
					<input type="password" className="form-control" id="contrasena" placeholder="Contraseña" required />
					<button type="submit" className="btn btn-primary">
						Iniciar sesión
					</button>
					<p>
						¿Todavía no estás registrado?
						<a className="link-primary text-decoration-underline" href="/pages/registro.html">
							Registrarse
						</a>
					</p>
				</CardForm>
			</main>
		</Layout>
	);
}
