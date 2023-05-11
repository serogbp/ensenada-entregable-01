/* Navbar en el Perfil, modificar perfil, feed, etc */

//TODO REVISAR POR QUE NO APARECEN EL BOTON BUSCAR Y SU INPUT

export default function Navbar() {
	return (
		<header class="sticky-top shadow-sm">
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand font-family--jetbrains-mono" href="#">
						{/* <!-- LOGO --> */}
						<strong>//TECLA</strong>_SOCIAL
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<div class="text-start d-lg-none mt-4 overflow-scroll">
							{/* <!-- Lista --> */}
							<ul class="nav-list list-unstyled card">
								<p class="h5 mb-1">Enlaces</p>
								<a href="/pages/feed.html">
									<li>🧾 Feed</li>
								</a>
								<a href="/pages/perfil-de-usuario.html">
									<li>🏠 Mi perfil</li>
								</a>
								<a href="/pages/lista-de-amigos.html">
									<li>💃 Amigos</li>
								</a>
								<li>📜 Anuncios</li>
								<li>🎙 Podcast</li>
								<li>🔑 Tags</li>
								<li>📊 Noticias</li>
								<li>💡 FAQ</li>
								<li>💬 Publicaciones</li>
								<li>📖 Guías</li>
							</ul>
						</div>
						<form class="d-flex" role="search">
							<input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
							<button class="btn btn-outline-success" type="submit">
								Buscar
							</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
}
