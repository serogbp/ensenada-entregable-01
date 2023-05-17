import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import PropTypes from "prop-types";

PostCreator.propsTypes = {
	addPost: PropTypes.func.isRequired,
};

export default function PostCreator(props) {
	const { addPost } = props;
	// TODO handle onSubmit para guardar el nuevo post
	// TODO handle picture
	const [text, setText] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		//TODO revisar necesito un objeto?
		addPost(text);
		setText("");
	};

	return (
		<form onSubmit={handleSubmit} className="d-flex flex-column gap-4 card">
			<div className="d-flex gap-4 align-items-center">
				<img src="" alt="" className="avatar" />
				<p className="font-bold h5 font-family--jetbrains-mono">Publicar un nuevo post</p>
			</div>
			<textarea value={text} onChange={(event) => setText(event.target.value)} id="create-post" name="create-post" autoComplete="off" placeholder="¿Qué está pasando?" className="p-3 rounded"></textarea>
			<div className="d-flex justify-content-between align-items-center">
				<CharacterCounter charactersLength={text.length} />
				<button type="submit" className="w-auto btn btn-primary">
					Publicar
				</button>
			</div>
		</form>
	);
}
