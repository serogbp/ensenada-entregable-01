import Layout from "../layouts/Layout";

export default function Registro() {
	return (
		<Layout>
			<main className="d-flex flex-grow-1 justify-content-center align-items-center bg-tecla-teal">
				{/* <!-- tarjeta datos de usuario --> */}
				<div className="card-login card-user bg-tecla-white shadow p-4 m-4">
					<p className="h5 font-family--jetbrains-mono d-flex justify-content-center mb-4">Registro de usuario</p>
					<div className="d-flex flex-column gap-3">
						<form className="d-flex flex-column gap-4">
							<div>
								<label className="required" for="email">
									Correo
								</label>
								<input required maxlength="150" type="email" className="form-control" name="email" id="email" />
							</div>
							<div>
								<label className="required" for="password">
									Contraseña
								</label>
								<input required maxlength="10" minlength="4" type="password" className="form-control" name="password" id="password" />
							</div>
							<div>
								<label className="required" for="username">
									Usuario
								</label>
								<input required maxlength="150" type="text" className="form-control" name="username" id="username" />
							</div>
							<div>
								<label className="required" for="name">
									Nombre
								</label>
								<input required maxlength="150" type="text" className="form-control" name="name" id="name" />
							</div>
							<div>
								<label className="required" for="surname1">
									Primer apellido
								</label>
								<input required maxlength="150" type="text" className="form-control" name="surname1" id="surname1" />
							</div>
							<div>
								<label className="required" for="surname2">
									Segundo apellido
								</label>
								<input required maxlength="150" type="text" className="form-control" name="surname2" id="surname2" />
							</div>
							<div>
								<label for="age">Edad</label>
								<input maxlength="3" type="number" className="form-control" name="age" id="age" />
							</div>
							<div>
								<label for="city">Ciudad</label>
								<input maxlength="150" type="text" className="form-control" name="city" id="city" />
							</div>
							<div>
								<label for="country">País</label>
								<input maxlength="150" type="text" className="form-control" name="country" id="country" />
							</div>
							<div>
								<label for="studies">Estudios</label>
								<input maxlength="150" type="text" className="form-control" name="studies" id="studies" />
							</div>
							<div>
								<label for="languages">Lenguajes</label>
								<input maxlength="150" type="text" className="form-control" name="languages" id="languages" />
							</div>
							<div>
								<label for="linkedin">LinkedIn</label>
								<input maxlength="150" type="text" className="form-control" name="linkedin" id="linkedin" />
							</div>
							<div>
								<label for="hobbies">Hobbies</label>
								<input maxlength="150" type="text" className="form-control" name="hobbies" id="hobbies" />
							</div>
							<div>
								<label for="role">Rol</label>
								<input maxlength="150" type="text" className="form-control" name="role" id="role" />
							</div>

							<button type="submit" className="btn btn-primary">
								Registrarse
							</button>
						</form>
						<p>
							¿Ya estás registrado?
							<a class="link-primary text-decoration-underline" href="/pages/login.html">
								Iniciar sesión
							</a>
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}
