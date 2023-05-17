import FriendRequestList from "../components/FriendRequestList";
import PostList from "../components/PostList";
import SideBarLinks from "../components/SideBarLinks";
import MainLayout from "../layouts/MainLayout";

export default function Feed() {
	return (
		<MainLayout>
			<div className="container">
				<div className="row gap-4">
					<div className="col-lg d-none d-lg-block">
						<SideBarLinks />
					</div>
					<div className="col-lg-6 d-flex flex-column gap-4 order-2">
						<PostList />
					</div>
					<div className="col-lg order-1 order-lg-3">
						<FriendRequestList />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
