import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const login = (event) => {
		event.preventDefault();
		const body = {
			email: document.querySelector("#usuario").value,
			password: document.querySelector("#contrasena").value,
		};

		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					localStorage.setItem("token", body.token);
					// window.location.href = "/feed";
					navigate("/feed");
				} else {
					const data = await response.json();
					alert(data.msg);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Layout>
			<main className="d-flex flex-grow-1 justify-content-center align-items-center bg-tecla-teal">
				{/* <!-- tarjeta datos de usuario --> */}
				<div className="card-login card-user bg-tecla-white shadow p-4">
					<p className="h5 font-family--jetbrains-mono d-flex justify-content-center mb-4">Inicio de sesión</p>
					<div className="d-flex flex-column gap-3">
						<form onSubmit={login} className="d-flex flex-column gap-4">
							<input type="text" className="form-control" id="usuario" placeholder="Usuario" required />
							<input type="password" className="form-control" id="contrasena" placeholder="Contraseña" required />
							<button type="submit" className="btn btn-primary">
								Iniciar sesión
							</button>
						</form>

						<p>
							¿Todavía no estás registrado?{" "}
							<Link className="link-primary text-decoration-underline" to="/register">
								Registrarse
							</Link>
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}
