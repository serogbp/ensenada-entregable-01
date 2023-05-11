import Feature from "./Feature";

export default function Hero() {
	return (
		<div className="d-flex flex-wrap bg-tecla-teal flex-lg-row gap-5 justify-content-center p-5">
			<img
				src="images/hero.webp"
				alt="Hero"
				className="object-fit-cover rounded-5"
				style={{
					width: "100%",
					maxWidth: "800px",
					height: "400px",
				}}
			/>

			<div className="d-flex flex-column">
				<Feature title={"Codear es conectar"} text={"¿Eres un desarrollador apasionado por el software y buscas una comunidad en línea para conectarte con otros profesionales y compartir tu conocimiento? ¡Has llegado al lugar correcto!"} withButton={true} />
			</div>
		</div>
	);
}
