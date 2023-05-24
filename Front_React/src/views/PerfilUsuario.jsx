import PerfilCabecera from "../components/PerfilCabecera";
import SideBarLinks from "../components/SideBarLinks";
import ProfileCard from "../components/profile/ProfileCard";
import MainLayout from "../layouts/MainLayout";
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
	if (!params.id) {
		return fetch(`http://localhost:3000/user`, {
			method: "GET",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then(async (response) => {
				const json = await response.json();
				return json;
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		return fetch(`http://localhost:3000/user/${params.id}`, {
			method: "GET",
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
			},
		})
			.then(async (response) => {
				const json = await response.json();
				return json;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default function PerfilUsuario() {
	const user = useLoaderData();

	return (
		<MainLayout>
			<div className="bg-light">
				<PerfilCabecera user={user} />
				<div className="row justify-content-center m-3">
					<div className="col-lg-2 m-3 menu-left">
						<SideBarLinks />
					</div>
					<div className="col-lg-6 mt-0 m-3 justify-content-center">
						<div className="p-4 d-flex gap-4 flex-column">
							<ProfileCard
								title={"Datos Personales"}
								campos={[
									{ data: "Nombre", value: user.name },
									{ data: "Apellidos", value: `${user.surname1} ${user.surname2}` },
									{ data: "Edad", value: user.age },
									{ data: "Ciudad", value: user.city },
									{ data: "Pais", value: user.country },
								]}
							/>

							<ProfileCard
								title={"Formación Académica"}
								campos={[
									{ data: "Estudios", value: user.studies },
									{ data: "Idiomas", value: user.languages },
									{ data: "Linkedin", value: user.linkedin },
								]}
							/>

							<ProfileCard title={"Otros"} campos={[{ data: "Hobbies", value: user.hobbies }]} />
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
