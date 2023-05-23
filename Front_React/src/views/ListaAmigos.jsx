import FriendList from "../components/FriendList";
import MainLayout from "../layouts/MainLayout";
import SideBarLinks from "../components/SideBarLinks";

export default function ListaAmigos() {
	return (
		<MainLayout>
			<div className="container">
				<div className="row gap-4 gap-lg-0">
					<div className="col d-none d-lg-block">
						<SideBarLinks />
					</div>
					<div className="col-lg-8 d-flex flex-column">
						<FriendList />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
