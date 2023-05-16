import { Link, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useState } from "react";

export default function Registro() {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
		username: "",
		name: "",
		surname1: "",
		surname2: "",
		age: "",
		city: "",
		country: "",
		studies: "",
		languages: "",
		linkedin: "",
		hobbies: "",
		role: "",
	});
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("http://localhost:3000/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formState),
		}).then(async (response) => {
			if (response.status === 200) {
				navigate("/login");
			} else {
				const data = await response.json();
				alert(data.msg);
			}
		});
	};

	const handleOnChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	return (
		<Layout>
			<main className="d-flex flex-grow-1 justify-content-center align-items-center bg-tecla-teal">
				{/* <!-- tarjeta datos de usuario --> */}
				<div className="card-login card-user bg-tecla-white shadow p-4 m-4">
					<p className="h5 font-family--jetbrains-mono d-flex justify-content-center mb-4">Registro de usuario</p>
					<div className="d-flex flex-column gap-3">
						<form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
							<div>
								<label className="required" htmlFor="email">
									Correo
								</label>
								<input onChange={handleOnChange} required maxLength="150" type="email" className="form-control" name="email" id="email" />
							</div>
							<div>
								<label className="required" htmlFor="password">
									Contraseña
								</label>
								<input onChange={handleOnChange} required maxLength="10" minLength="4" type="password" className="form-control" name="password" id="password" />
							</div>
							<div>
								<label className="required" htmlFor="username">
									Usuario
								</label>
								<input onChange={handleOnChange} required maxLength="150" type="text" className="form-control" name="username" id="username" />
							</div>
							<div>
								<label className="required" htmlFor="name">
									Nombre
								</label>
								<input onChange={handleOnChange} required maxLength="150" type="text" className="form-control" name="name" id="name" />
							</div>
							<div>
								<label className="required" htmlFor="surname1">
									Primer apellido
								</label>
								<input onChange={handleOnChange} required maxLength="150" type="text" className="form-control" name="surname1" id="surname1" />
							</div>
							<div>
								<label className="required" htmlFor="surname2">
									Segundo apellido
								</label>
								<input onChange={handleOnChange} required maxLength="150" type="text" className="form-control" name="surname2" id="surname2" />
							</div>
							<div>
								<label htmlFor="age">Edad</label>
								<input onChange={handleOnChange} maxLength="3" type="number" className="form-control" name="age" id="age" />
							</div>
							<div>
								<label htmlFor="city">Ciudad</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="city" id="city" />
							</div>
							<div>
								<label htmlFor="country">País</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="country" id="country" />
							</div>
							<div>
								<label htmlFor="studies">Estudios</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="studies" id="studies" />
							</div>
							<div>
								<label htmlFor="languages">Lenguajes</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="languages" id="languages" />
							</div>
							<div>
								<label htmlFor="linkedin">LinkedIn</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="linkedin" id="linkedin" />
							</div>
							<div>
								<label htmlFor="hobbies">Hobbies</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="hobbies" id="hobbies" />
							</div>
							<div>
								<label htmlFor="role">Rol</label>
								<input onChange={handleOnChange} maxLength="150" type="text" className="form-control" name="role" id="role" />
							</div>

							<button type="submit" className="btn btn-primary">
								Registrarse
							</button>
						</form>
						<p>
							¿Ya estás registrado?{" "}
							<Link className="link-primary text-decoration-underline" to="/login">
								Iniciar sesión
							</Link>
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}
