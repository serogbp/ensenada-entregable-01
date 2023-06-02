import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ModificarPerfil() {
	const { state } = useLocation();
	const [user, setUser] = useState(state.userState);
	const navigate = useNavigate();

	const updateUser = () => {
		fetch(`http://localhost:3000/user`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(user),
		})
			.then(async (response) => {
				if (response.status === 200) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Datos modificados!",
						showConfirmButton: true,
					});
					navigate("/profile");
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Error al modificar el perfil",
						footer: "Revise los datos introducidos",
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleOnChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<MainLayout>
			<div className="bg-body">
				<div className="row justify-content-center m-3">
					<main className="d-flex flex-grow-1 justify-content-center align-items-center ">
						{/* <!-- tarjeta datos de usuario --> */}
						<div className="card-user bg-tecla-white p-4 my-5">
							<p className="h5 mb-1 font-family--jetbrains-mono mb-4">Modificar perfil de usuario</p>
							{/* <!-- columna izqda con los datos --> */}
							<div className="d-flex align-content-start gap-5 flex-column flex-lg-row">
								<div className="left-column d-flex order-1 order-lg-0 justify-content-evenly align-self-start">
									<form>
										<div className="mb-3">
											<input type="text" className="form-control loadData" name="name" id="name" placeholder="Nombre" value={user.name} onChange={handleOnChange} />
											<span className="spHelp">Nombre</span>
										</div>
										<div className="mb-3">
											<input type="text" className="form-control loadData" name="surname1" id="surname1" placeholder="Primer Apellido" aria-label="Primer Apellido" value={user.surname1} onChange={handleOnChange} />
											<span className="spHelp">Primer apellido</span>
										</div>
										<div className="mb-3">
											<input type="text" className="form-control loadData" name="surname2" id="surname2" placeholder="Segundo Apellido" aria-label="Segundo Apellido" value={user.surname2} onChange={handleOnChange} />
											<span className="spHelp">Segundo apellido</span>
										</div>
										<div className="row mb-3">
											<div className="col">
												<input type="text" className="form-control loadData" name="city" id="city" placeholder="Ciudad" aria-label="Ciudad" value={user.city} onChange={handleOnChange} />
												<span className="spHelp">Ciudad</span>
											</div>
											<div className="col">
												<input type="text" className="form-control loadData" name="country" id="country" placeholder="Pais" aria-label="Pais" data-tip="Pais" value={user.country} onChange={handleOnChange} />
												<span className="spHelp">Pais</span>
											</div>
										</div>
										<div className="mb-3">
											<input type="text" name="age" id="age" className="form-control loadData" placeholder="Edad" value={user.age} onChange={handleOnChange} />
											<span className="spHelp">Edad</span>
										</div>
										<div className="mb-3">
											<input type="url" name="linkedin" id="linkedin" className="form-control loadData" placeholder="LinkedIn" value={user.linkedin} onChange={handleOnChange} />
											<span className="spHelp">LinkedIn</span>
										</div>
										<div className="mb-3">
											<input type="url" name="role" id="role" className="form-control loadData" placeholder="Rol" value={user.role} onChange={handleOnChange} />
											<span className="spHelp">Rol</span>
										</div>
										<div className="form-floating mb-3">
											<textarea className="form-control loadData" placeholder="Estudios" name="studies" id="studies" style={{ height: "100px" }} value={user.studies} onChange={handleOnChange}></textarea>
											<label for="Studies">Estudios</label>
										</div>
										<div className="form-floating mb-3">
											<textarea className="form-control loadData" placeholder="Idiomas" name="languages" id="languages" style={{ height: "100px" }} value={user.languages} onChange={handleOnChange}></textarea>
											<label for="Languages">Idiomas</label>
										</div>
										<div className="form-floating mb-3">
											<textarea className="form-control loadData" placeholder="Aficiones" name="hobbies" id="hobbies" style={{ height: "100px" }} value={user.hobbies} onChange={handleOnChange}></textarea>
											<label for="hobbies">Aficiones</label>
										</div>
										<div className="mb-3">
											<input type="email" className="form-control loadData" name="email" id="email" placeholder="name@example.com" value={user.email} onChange={handleOnChange} />
											<span className="spHelp">Email</span>
										</div>
									</form>
								</div>
								{/* <!-- columna dcha foto perfil --> */}
								<div className="right-column order-0 order-lg-1 d-flex flex-column justify-content-start align-item-start">
									<div className="d-flex justify-content-center">
										<img name="avatar" id="avatar" src={user.picture} className="profile rounded-circle" alt="profile-icon" />
									</div>
									<div className="d-flex justify-content-center">
										<label className="btn m-2 btn-outline-dark">
											Modificar
											<input hidden />
										</label>
									</div>
								</div>
							</div>
							{/* <!-- botones --> */}
							<div className="d-flex justify-content-center w-auto">
								<button name="saveBtn" id="saveBtn" className="btn m-2 btn-primary" onClick={updateUser}>
									Guardar
								</button>
								<button type="button" className="btn m-2 btn-danger" onClick={() => navigate("/profile")}>
									Cancelar
								</button>
							</div>
						</div>
					</main>
				</div>
			</div>
		</MainLayout>
	);
}
