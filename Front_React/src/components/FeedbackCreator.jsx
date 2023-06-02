import PropTypes from "prop-types";
import { useState } from "react";

FeedbackCreator.propsTypes = {
	addFeedback: PropTypes.func.isRequired,
};

export default function FeedbackCreator(props) {
	const { addFeedback } = props;

	const [formState, setFormState] = useState({
		position: "",
		relation: "",
		content: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		addFeedback(formState);
		setFormState({
			position: "",
			relation: "",
			content: "",
		});
	};

	const handleOnChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit} className="card d-flex flex-column gap-4 p-4">
			<p className="font-bold h5 font-family--jetbrains-mono">Feedback / Recomendaciones</p>
			<div>
				<label className="font-family--jetbrains-mono" htmlFor="position">
					Cargo
				</label>
				<input id="position" type="text" name="position" value={formState.position} onChange={handleOnChange} className="form-control font-family--jetbrains-mono p-1 rounded bg-light" />
			</div>
			<div>
				<label className="font-family--jetbrains-mono" htmlFor="relation">
					Relación
				</label>
				<input id="relation" type="text" name="relation" value={formState.relation} onChange={handleOnChange} className="form-control font-family--jetbrains-mono p-1 rounded bg-light" />
			</div>
			<div>
				<label className="font-family--jetbrains-mono" htmlFor="content">
					Comentario
				</label>
				<textarea value={formState.content} onChange={handleOnChange} id="content" name="content" autoComplete="off" className="form-control font-family--jetbrains-mono p-1 rounded bg-light"></textarea>
			</div>
			<div>
				<button type="submit" className="w-auto btn btn-primary w-auto float-end">
					Añadir Feedback
				</button>
			</div>
		</form>
	);
}
