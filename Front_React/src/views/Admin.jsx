import MainLayout from "../layouts/MainLayout";
import AdminPanel from "../components/AdminPanel";

export default function Admin() {
	return (
		<MainLayout>
			<div className="container-xxl d-flex flex-column">
				<AdminPanel />
			</div>
		</MainLayout>
	);
}
