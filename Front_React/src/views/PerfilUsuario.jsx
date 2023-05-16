import PerfilCabecera from "../components/PerfilCabecera";
import SideBarLinks from "../components/SideBarLinks";
import ProfileCard from "../components/profile/ProfileCard";
import MainLayout from "../layouts/MainLayout";

export default function PerfilUsuario() {
	// codigo que recoge datos del usuario
	const user = {};
	return (
		<MainLayout>
			<div className="bg-light">
				<PerfilCabecera />
				<div className="row">
					<div className="col-lg-2">
						<SideBarLinks />
					</div>
					<div className="col-lg-6 m-3 justify-content-center">
						<div className="p-4 d-flex gap-4 flex-column">
							<ProfileCard
								title={"Datos personales"}
								campos={[
									{ nombre: "Nombre", valor: "Juan" },
									{ nombre: "Apellido", valor: "Perez" },
									{ nombre: "Email", valor: "Juan@gmail" },
									{ nombre: "Teléfono", valor: "123456789" },
								]}
							/>

							<ProfileCard
								title={"Formación académica"}
								campos={[
									{ nombre: "Nombre", valor: "Juan" },
									{ nombre: "Apellido", valor: "Perez" },
									{ nombre: "Email", valor: "Juan@gmail" },
									{ nombre: "Teléfono", valor: "123456789" },
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
