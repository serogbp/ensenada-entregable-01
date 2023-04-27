const POST_CREATOR = document.getElementById("post-creator");
const MAX_CHARACTERS = 280;

const createElement = async () => {
	const picture = await getPicture();

	const element = document.createElement("div");
	element.classList.add("d-flex", "flex-column", "gap-4", "card");
	element.innerHTML = `
		<div class="d-flex gap-3 align-items-center">
			<img class="avatar" src="${picture}" alt="Imagen del usuario"/>
			<p class="font-bold h5">Publicar un nuevo post</p>
		</div>
		<textarea id="create-post" name="create-post" autocomplete="off" placeholder="¿Qué está pasando?" class="p-3 rounded" style="height:100px;"></textarea>
		<div class="d-flex justify-content-between align-items-center">
			<p class="counter m-0 h5 font-bold"></p>
			<button class="btn btn-primary">Publicar</button>
		</div>
	`;

	// Listener TextArea para contar caracteres
	const textarea = element.querySelector("textarea");
	const counterElement = element.querySelector(".counter");
	let counter = MAX_CHARACTERS;
	["keydown", "keyup"].forEach((callbackfn) =>
		textarea.addEventListener(callbackfn, (e) => {
			counter = MAX_CHARACTERS - e.target.value.length;
			counterElement.innerText = counter;

			let style = "black";
			if (counter <= 20) style = "#ffc107";
			if (counter < 0) style = "#dc3545";
			counterElement.style.color = style;
		})
	);

	const button = element.querySelector(".btn");
	button.addEventListener("click", () => {
		if (counter === MAX_CHARACTERS) {
			alert("Por favor, escriba un mensaje.");
			return;
		}
		if (counter >= 0) {
			const idLogged = localStorage.getItem("idLogged");
			const content = textarea.value;
			fetch(`http://localhost:3000/post/${idLogged}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_id: idLogged,
					content: content,
				}),
			}).then(async (response) => {
				if (response.status === 200) {
					window.location.href = "/pages/feed.html";
				} else {
					const data = await response.json();
					alert(data.msg);
				}
			});
			return;
		}
		if (counter < 0) {
			alert("Has excedido el limite de caracteres");
			return;
		}
	});

	return element;
};

export const renderElement = async () => {
	const element = await createElement();
	POST_CREATOR.appendChild(element);
};

const getPicture = async () => {
	const user_id = localStorage.getItem("idLogged");
	const response = await fetch(`http://localhost:3000/user/${user_id}`, {
		method: "GET",
	});
	const json = await response.json();
	return json.picture;
};
