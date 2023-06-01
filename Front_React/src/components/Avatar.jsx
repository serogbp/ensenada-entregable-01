import { Link } from "react-router-dom";
import { ROUTES } from "../common/enums";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Avatar() {
	const [user, setUser] = useState({});

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
		fetch("http://localhost:3000/user", {
			method: "GET",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					setUser(body);
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Error al recuperar los datos",
						footer: "Intentelo pasados unos minutos",
					});
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="card d-flex flex-column align-items-center gap-4 hover-scale">
			<Link to={ROUTES.PROFILE} className="d-flex flex-column align-items-center gap-2">
				<div className="avatar" style={{ width: "5rem", height: "5rem" }}>
					<img className="w-100 h-100" src={user.picture} alt={user.name} />
				</div>
				<div className="doble-texto text-start">
					<p className="text-break">
						{user.name} {user.surname1}
					</p>
					<p className="text-break">@{user.username}</p>
					<p className="text-break pt-2 font-family--jetbrains-mono">{user.role}</p>
				</div>
			</Link>
		</div>
	);
}
