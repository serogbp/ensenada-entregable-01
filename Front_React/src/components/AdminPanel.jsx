import { useEffect, useState } from "react";
import { EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";

export default function AdminPanel() {
	const [userList, setUserList] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	// Calcular paginacion
	const PER_PAGE = 5;
	const offset = currentPage * PER_PAGE;
	const currentPageData = userList.slice(offset, offset + PER_PAGE);
	const pageCount = Math.ceil(userList.length / PER_PAGE);

	// Inicializar tooltips
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

	useEffect(() => {
		fetch(`http://localhost:3000/admin`, {
			method: "GET",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then(async (response) => {
				if (response.status === 200) {
					const body = await response.json();
					setUserList(body);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{/* Tabla */}
			<table class="table table-striped table-hover text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Imagen</th>
						<th>Nombre</th>
						<th>Apellidos</th>
						<th>Email</th>
						<th>Ciudad</th>
						<th>Rol</th>
						<th>Tipo</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{currentPageData.map((user) => (
						<tr>
							<td className="align-middle " style={{ width: "5%" }}>
								{user.user_id}
							</td>
							<td className="align-middle " style={{ width: "5%" }}>
								<img src={user.picture} alt={user.name} width="45" height="45" className="rounded" />
							</td>
							<td className="align-middle " style={{ width: "10%" }}>
								{user.name}
							</td>
							<td className="align-middle " style={{ width: "15%" }}>
								{user.surname1} {user.surname2}
							</td>
							<td className="align-middle " style={{ width: "15%" }}>
								{user.email}
							</td>
							<td className="align-middle " style={{ width: "10%" }}>
								{user.city}
							</td>
							<td className="align-middle " style={{ width: "15%" }}>
								{user.role}
							</td>
							<td className="align-middle " style={{ width: "10%" }}>
								{user.userType === 0 ? "usuario" : "Administrador"}
							</td>
							<td className="align-middle " style={{ width: "25%" }}>
								<div className="d-flex gap-1">
									<button className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Ver perfil">
										<EyeFill />
									</button>
									<button className="btn btn-outline-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Editar perfil">
										<PencilFill />
									</button>
									<button className="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Eliminar perfil">
										<TrashFill />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Paginacion */}
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item">
						{/* prettier-ignore */}
						<a class="page-link" href="#" onClick={() => { if (currentPage > 0) setCurrentPage(currentPage - 1); }} >
							Previous
						</a>
					</li>
					{[...Array(pageCount).keys()].map((page, index) => (
						<li class="page-item">
							<a class="page-link" href="#" onClick={() => setCurrentPage(index)}>
								{index + 1}
							</a>
						</li>
					))}
					<li class="page-item">
						{/* prettier-ignore */}
						<a class="page-link" href="#" onClick={() => { if (currentPage < pageCount - 1) setCurrentPage(currentPage + 1); }} >
							Next
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
