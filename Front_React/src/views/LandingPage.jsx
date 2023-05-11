import Layout from "../layouts/Layout";
// import "../css/landing-page.module.css";

export default function LandingPage() {
	return (
		<Layout>
			<main className="flex-grow-1">
				{/* <!-- 🦸 Hero --> */}
				<div className="feature hero d-flex flex-wrap bg-tecla-teal flex-lg-row gap-4 justify-content-center">
					<img alt="Hero" src="images/hero.webp" className="hero__image object-fit-cover rounded-5" />
					<div className="d-flex flex-column">
						<h1 className="display-1 fw-bolder">Codear es conectar</h1>
						<p className="max-w-prose text-">¿Eres un desarrollador apasionado por el software y buscas una comunidad en línea para conectarte con otros profesionales y compartir tu conocimiento? ¡Has llegado al lugar correcto!</p>
						<a href="/pages/login.html" className="btn-tecla mt-4">
							{" "}
							COMIENZA TU AVENTURA{" "}
						</a>
					</div>
				</div>

				{/* <!-- 📚 Features --> */}
				<div className="d-flex flex-column flex-xl-row">
					<div className="feature feature--col flex-grow-1 bg-tecla-pink">
						<h2 className="display-2 fw-bolder">¿Quieres ser programador?</h2>
						<p className="max-w-prose">Nuestra comunidad es inclusiva y diversa, y nos enorgullece ofrecer un ambiente seguro y respetuoso para todos nuestros miembros. Ya seas un desarrollador principiante o un experto en el campo, estamos seguros de que encontrarás valor en nuestra plataforma.</p>
					</div>
					<div className="feature feature--col flex-grow-1 bg-tecla-yellow">
						<h2 className="display-2 fw-bolder">¿Por qué //TECLA_SOCIAL?</h2>
						<p className="max-w-prose">Ofrecemos herramientas específicas para desarrolladores, así como un lugar seguro y acogedor para todos los niveles de experiencia. Además, es una excelente manera de mantenerse actualizado sobre las últimas tendencias y novedades en el mundo del desarrollo de software.</p>
					</div>
				</div>

				{/* <!-- 📚 Lista vertical de features --> */}
				<div className="feature feature--col">
					<h2 className="display-2 fw-bolder">En nuestra red social, podrás:</h2>
					<ul className="gap-4 d-flex flex-column">
						<li>Compartir tus proyectos y recibir retroalimentación de otros expertos.</li>
						<li>Aprender de otros desarrolladores y obtener nuevas ideas para tus proyectos.</li>
						<li>Descubrir oportunidades de trabajo y colaboración con otros profesionales.</li>
						<li>Participar en grupos de discusión para discutir temas relevantes para el mundo del desarrollo de software.</li>
						<li>Acceder a una amplia variedad de recursos de aprendizaje y capacitación en línea.</li>
					</ul>
					<a href="/pages/login.html" className="btn-tecla mt-4">
						{" "}
						COMIENZA TU AVENTURA{" "}
					</a>
				</div>
			</main>
		</Layout>
	);
}
