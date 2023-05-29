import MainLayout from "../layouts/MainLayout";
import SideBarLinks from "../components/SideBarLinks";
import AdminPanel from "../components/AdminPanel";

export default function Admin() {
	return (
		<MainLayout>
			<div className="container d-flex flex-column">
				<button className="btn btn-outline-primary w-auto align-self-end">Imprimir</button>
				<div className="row gap-4 gap-lg-0">
					<div className="col-lg-12 d-flex flex-column">
						<AdminPanel />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
