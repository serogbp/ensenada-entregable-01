import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

PerfilCabecera.propsTypes = {
	user: PropTypes.object.isRequired,
};

/* card con la foto, botones, nombre y apellidos */

export default function PerfilCabecera(props) {
	const { user } = props;
	// Parametro id de un amigo
	const { id } = useParams();
	const navigate = useNavigate();

	const [modal, setModal] = useState(false);

	const handleDelete = () => {
		fetch(`http://localhost:3000/user/`, {
			method: "DELETE",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		}).then(async (response) => {
			if (response.status === 200) {
				navigate("/");
				localStorage.removeItem("token");
			} else {
				const data = await response.json();
				alert(`Error eliminando el usuario: ${data.msg}`);
				navigate("/profile");
			}
		});
	};

	return (
		<div className="container-fluid flex-grow-1">
			<div className="row justify-content-center m-3">
				<div className="col-lg-10 col-card">
					<div className="row">
						<div className="col-lg-10 text-center">
							<div className="row justify-content-center">
								<img id="avatar" src={user.picture} className="picture rounded-circle" alt="profile-icon" />
							</div>
							<div className="row h6 font-family--jetbrains-mono">
								<p className="userData">
									{user.name} {user.surname1} {user.surname2}
								</p>
							</div>
							<div className="row font-family--jetbrains-mono">
								<p className="userData">{user.role}</p>
							</div>
						</div>
						{!id && (
							<div className="col-lg-2 text-center" id="editUser">
								<button type="button" className="btn btn-outline-dark" onClick={() => navigate("/profile/edit")}>
									Editar perfil
								</button>

								<button type="button" className="btn btn-outline-danger" onClick={() => setModal(true)}>
									Eliminar perfil
								</button>
							</div>
						)}
					</div>
					{!modal && (
						<div id="id01" className="modal">
							<span className="close" title="Close Modal">
								×
							</span>
							<form className="modal-content">
								<div>
									<h1>Eliminar cuenta</h1>
									<p>Seguro que desea eliminar la cuenta?</p>

									<div className="clearfix">
										<button type="button" className="cancelbtn">
											Cancelar
										</button>
										<button type="button" id="deleteUser" onClick={handleDelete} className="deletebtn">
											Confirmar
										</button>
									</div>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
