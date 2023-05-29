import MainLayout from "../layouts/MainLayout";
import AdminPanel from "../components/AdminPanel";

export default function Admin() {
	return (
		<MainLayout>
			<div className="container d-flex flex-column">
				<div className="row gap-4 gap-lg-0">
					<div className="col-lg-12 d-flex flex-column">
						<AdminPanel />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
