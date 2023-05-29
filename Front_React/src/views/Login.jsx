import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	const login = (event) => {
		event.preventDefault();

		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formState),
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					localStorage.setItem("token", body.token);
					if (body.userType) localStorage.setItem("userType", body.userType);
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

	const handleOnchange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};
	return (
		<Layout>
			<main className="d-flex flex-grow-1 justify-content-center align-items-center bg-tecla-teal">
				{/* <!-- tarjeta datos de usuario --> */}
				<div className="card-login card-user bg-tecla-white shadow p-4 bg-light-subtle">
					<p className="h5 font-family--jetbrains-mono d-flex justify-content-center mb-4">Inicio de sesión</p>
					<div className="d-flex flex-column gap-3">
						<form onSubmit={login} className="d-flex flex-column gap-4">
							<input onChange={handleOnchange} type="text" className="form-control" name="email" id="usuario" placeholder="Usuario" required />
							<input onChange={handleOnchange} type="password" className="form-control" name="password" id="contrasena" placeholder="Contraseña" required />
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
