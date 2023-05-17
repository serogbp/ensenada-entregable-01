import FriendRequestList from "../components/FriendRequestList";
import PostCreator from "../components/PostCreator";
import PostList from "../components/PostList";
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
					<div className="col-6 d-flex flex-column gap-4">
						<PostList />
					</div>
					<div className="col">
						<FriendRequestList />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
