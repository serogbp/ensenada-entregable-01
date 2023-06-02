import FriendList from "../components/FriendList";
import MainLayout from "../layouts/MainLayout";
import SideBarLinks from "../components/SideBarLinks";
import SugestedList from "../components/SugestedList";

export default function ListaAmigos() {
	return (
		<MainLayout>
			<div className="container">
				<div className="row gap-4 gap-lg-0">
					<div className="col d-none d-lg-block">
						<SideBarLinks />
					</div>
					<div className="col-lg-10 d-flex flex-column gap-4">
						<FriendList />
						<SugestedList />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
