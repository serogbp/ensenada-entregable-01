import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "./Modal";

PerfilCabecera.propsTypes = {
	user: PropTypes.object.isRequired,
};

/* card con la foto, botones, nombre y apellidos */

export default function PerfilCabecera(props) {
	const { user } = props;
	// Parametro id de un amigo
	const { id } = useParams();
	const navigate = useNavigate();

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
								<button type="button" className="btn btn-outline-dark" onClick={() => navigate("/profile/edit", { state: { userState: user } })}>
									Editar perfil
								</button>

								<button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleDelete}>
									Eliminar perfil
								</button>
							</div>
						)}
					</div>

					<Modal />
				</div>
			</div>
		</div>
	);
}
