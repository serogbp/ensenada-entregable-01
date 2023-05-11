import propTypes from "prop-types";

CardForm.propTypes = {
	title: propTypes.string.isRequired,
	handleSubmit: propTypes.func.isRequired,
};

export default function CardForm(props) {
	const { title, handleSubmit } = props;

	return (
		<div
			className="bg-tecla-white shadow p-4 rounded"
			style={{
				width: "25rem",
			}}
		>
			<p className="h5 font-family--jetbrains-mono d-flex justify-content-center mb-4">{title}</p>
			<form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
				{props.children}
			</form>
		</div>
	);
}
