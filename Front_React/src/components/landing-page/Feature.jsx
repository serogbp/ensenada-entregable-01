import propTypes from "prop-types";

Feature.propTypes = {
	title: propTypes.string.isRequired,
	text: propTypes.string,
	withButton: propTypes.bool,
};

export default function Feature(props) {
	return (
		<>
			<h1 className="display-2 fw-bolder font-family--jetbrains-mono">{props.title}</h1>
			{props.text && <p className="max-w-prose fs-4">{props.text}</p>}
			{props.children}
			{props.withButton && (
				<a href="/pages/login.html" className="btn-tecla mt-4">
					COMIENZA TU AVENTURA
				</a>
			)}
		</>
	);
}
