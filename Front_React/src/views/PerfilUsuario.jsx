import PerfilCabecera from "../components/PerfilCabecera";
import Prueba from "../components/profile/prueba";
import MainLayout from "../layouts/MainLayout";

export default function PerfilUsuario() {
	// codigo que recoge datos del usuario
	const user = {};
	return (
		<MainLayout>
			<div className="bg-light">
				<PerfilCabecera />
				<div className="p-4 d-flex gap-4 flex-column">
					<Prueba
						title={"Datos personales"}
						campos={[
							{ nombre: "Nombre", valor: "Juan" },
							{ nombre: "Apellido", valor: "Perez" },
							{ nombre: "Email", valor: "Juan@gmail" },
							{ nombre: "Teléfono", valor: "123456789" },
						]}
					/>

					<Prueba
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
		</MainLayout>
	);
}
