import Feature from "../components/landing-page/Feature";
import Hero from "../components/landing-page/Hero";
import Layout from "../layouts/Layout";

export default function LandingPage() {
	return (
		<Layout>
			{/* <!-- 🦸 Hero --> */}
			<Hero />
			{/* <!-- 📚 Features --> */}
			<div className="d-flex flex-column flex-xl-row">
				<div className="bg-tecla-pink p-5">
					<Feature title={"¿Quieres ser programador?"} text={"Nuestra comunidad es inclusiva y diversa, y nos enorgullece ofrecer un ambiente seguro y respetuoso para todos nuestros miembros. Ya seas un desarrollador principiante o un experto en el campo, estamos seguros de que encontrarás valor en nuestra plataforma."} />
				</div>
				<div className="bg-tecla-yellow p-5">
					<Feature title={"¿Por qué //TECLA_SOCIAL?"} text={"Ofrecemos herramientas específicas para desarrolladores, así como un lugar seguro y acogedor para todos los niveles de experiencia. Además, es una excelente manera de mantenerse actualizado sobre las últimas tendencias y novedades en el mundo del desarrollo de software."} />
				</div>
			</div>

			{/* <!-- 📚 Lista vertical de features --> */}
			<div className="feature feature--col p-5">
				<Feature title={"En nuestra red social, podrás:"} withButton={true}>
					<ul className="gap-4 d-flex flex-column fs-4 p-5">
						<li>Compartir tus proyectos y recibir retroalimentación de otros expertos.</li>
						<li>Aprender de otros desarrolladores y obtener nuevas ideas para tus proyectos.</li>
						<li>Descubrir oportunidades de trabajo y colaboración con otros profesionales.</li>
						<li>Participar en grupos de discusión para discutir temas relevantes para el mundo del desarrollo de software.</li>
						<li>Acceder a una amplia variedad de recursos de aprendizaje y capacitación en línea.</li>
					</ul>
				</Feature>
			</div>
		</Layout>
	);
}
