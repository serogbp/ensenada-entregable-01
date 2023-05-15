import PostCreator from "../components/PostCreator";
import SideBarLinks from "../components/SideBarLinks";
import MainLayout from "../layouts/MainLayout";

export default function Feed() {
	return (
		<MainLayout>
			<div className="container">
				<div className="row">
					<div className="col ">
						<SideBarLinks />
					</div>
					<div className="col-6">
						<PostCreator />
					</div>
					<div className="col col">peticiones y eventos</div>
				</div>
			</div>
		</MainLayout>
	);
}
