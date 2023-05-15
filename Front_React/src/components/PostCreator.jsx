import { useState } from "react";
import CharacterCounter from "./CharacterCounter";

export default function PostCreator() {
	// TODO handle crear posts
	// TODO handle picture

	const [text, setText] = useState("");

	return (
		<div className="d-flex flex-column gap-4 card">
			<div className="d-flex gap-4 align-items-center">
				<img src="" alt="" className="avatar" />
				<p className="font-bold h5">Publicar un nuevo post</p>
			</div>
			<textarea value={text} onChange={(event) => setText(event.target.value)} id="create-post" name="create-post" autoComplete="off" placeholder="¿Qué está pasando?" className="p-3 rounded"></textarea>
			<div className="d-flex justify-content-between align-items-center">
				<CharacterCounter charactersLength={text.length} />
				<button className="w-auto btn btn-primary">Publicar</button>
			</div>
		</div>
	);
}
