import { useState, useEffect } from "react";
import PropTypes from "prop-types";

AdminEditProfile.propsTypes = {
	user: PropTypes.object.isRequired,
	setModifiedUser: PropTypes.func.isRequired,
};

export default function AdminEditProfile(props) {
	const [user, setUser] = useState({});
	/* 	const { setModifiedUser } = ; */

	useEffect(() => {
		setUser(props.user);
	}, [props.user]);

	useEffect(() => {
		if (Object.keys(user).length > 0) {
			props.setModifiedUser(user);
		} else {
			console.log("user esta vacio, no es actualiza el modifiedUser", user);
		}
	}, [user]);

	const handleOnChange = (e) => {
		// const a = { ...user, [e.target.name]: e.target.value };
		// props.setModifiedUser(a);
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<>
			<p className="h5 mb-1 font-family--jetbrains-mono mb-4">Modificar perfil de usuario</p>
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
			</div>
		</>
	);
}
