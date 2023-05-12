/* Navbar para movil en la parte final*/
export default function BottomNavbar() {
	return (
		<div className="position-sticky fixed-bottom d-flex justify-content-around bg-tecla-blue d-lg-none px-4 py-2">
			<a href="/pages/feed.html">
				<i className="icon icon--white bi bi-house-fill"></i>
			</a>
			<a href="/pages/lista-de-amigos.html">
				<i className="icon icon--white bi bi-people-fill"></i>
			</a>
			<a href="/pages/perfil-de-usuario.html">
				{" "}
				<img className="icon rounded-circle" src="/public/images/profile-icon.jpg" alt="Usuario" />
			</a>
		</div>
	);
}
