import { useState, useEffect } from "react";

export default function AdminEditProfile(props) {
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(props.user);
	}, [props.user]);

	const handleOnChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		props.setModifiedUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<>
			<p onClick={() => props.closeModal()} className="h5 mb-1 font-family--jetbrains-mono mb-4">
				Modificar perfil de usuario
			</p>
			{/* <!-- columna izqda con los datos --> */}
			<div className="d-flex align-content-start gap-5 flex-column flex-lg-row">
				<div className="left-column d-flex order-1 order-lg-0 justify-content-evenly align-self-start">
					<form>
						<div className="mb-3">
							<input type="text" className="form-control loadData" name="name" id="name" placeholder="Nombre" value={user.name} onChange={handleOnChange} />
						</div>
						<div className="mb-3">
							<input type="text" className="form-control loadData" name="surname1" id="surname1" placeholder="Primer Apellido" aria-label="Primer Apellido" value={user.surname1} onChange={handleOnChange} />
						</div>
						<div className="mb-3">
							<input type="text" className="form-control loadData" name="surname2" id="surname2" placeholder="Segundo Apellido" aria-label="Segundo Apellido" value={user.surname2} onChange={handleOnChange} />
						</div>
						<div className="row mb-3">
							<div className="col">
								<input type="text" className="form-control loadData" name="city" id="city" placeholder="Ciudad" aria-label="Ciudad" value={user.city} onChange={handleOnChange} />
							</div>
							<div className="col">
								<input type="text" className="form-control loadData" name="country" id="country" placeholder="Pais" aria-label="Pais" data-tip="Pais" value={user.country} onChange={handleOnChange} />
							</div>
						</div>
						<div className="mb-3">
							<input type="text" name="age" id="age" className="form-control loadData" placeholder="Edad" value={user.age} onChange={handleOnChange} />
						</div>
						<div className="mb-3">
							<input type="url" name="linkedin" id="linkedin" className="form-control loadData" placeholder="LinkedIn" value={user.linkedin} onChange={handleOnChange} />
						</div>
						<div className="mb-3">
							<input type="url" name="role" id="role" className="form-control loadData" placeholder="Rol" value={user.role} onChange={handleOnChange} />
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
						</div>
						<div className="mb-3">
							{/* <label className="form-label">Tipo de usuario</label> */}
							<select className="form-select loadData" name="userType" id="userType" value={user.userType} onChange={handleOnChange}>
								<option value="">Tipo de usuario</option>
								<option value="1">Administrador</option>
								<option value="0">Usuario</option>
							</select>
						</div>
					</form>
				</div>
				{/* <!-- columna dcha foto perfil --> */}
				{/* <div className="right-column order-0 order-lg-1 d-flex flex-column justify-content-start align-item-start">
								<div className="d-flex justify-content-center">
									<img name="avatar" id="avatar" src={user.picture} className="profile rounded-circle" alt="profile-icon" />
								</div>
								<div className="d-flex justify-content-center">
									<label className="btn m-2 btn-outline-dark">
										Modificar
										<input hidden />
									</label>
								</div>
							</div> */}
			</div>
		</>
	);
}
