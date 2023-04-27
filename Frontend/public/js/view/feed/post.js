const POST_WRAPPER = document.getElementById("post-wrapper");

const createPostElement = (post) => {
	const element = document.createElement("div");
	element.classList.add("card", "post", "rounded-3", "p-0");

	const elementBody = document.createElement("div");
	elementBody.classList.add("p-4", "d-flex", "flex-column", "gap-3");
	elementBody.appendChild(postHeader(post));
	elementBody.appendChild(postContent(post));
	elementBody.appendChild(postFooter(post));

	element.appendChild(elementBody);

	return element;
};

const postHeader = (post) => {
	const element = document.createElement("div");
	element.classList.add("post__user-info");
	element.innerHTML = `
	<div class="d-flex gap-4">
		<img class="avatar" src="${post.picture}" alt="Imagen del usuario"/>
		<div class="doble-texto">
			<p>${post.name} ${post.surname1} ${post.surname2}</p>
			<p>@${post.username}</p>
		</div>
		<div>${moment(post.publishDate).format("MMM DD HH:ss")}</div>
	</div>

	<div class="icon-wrapper">
		<i class="icon bi bi-three-dots"></i>
	</div>
	`;
	return element;
};

const postContent = (post) => {
	const element = document.createElement("div");
	element.classList.add("d-flex", "flex-column", "gap-2", "mt-2");

	element.innerHTML = `
		<p class="m-0">${post.content}</p>

	`;
	return element;
};

const postFooter = (post) => {
	const element = document.createElement("div");
	element.appendChild(heart());
	return element;
};

const heart = () => {
	let clicked = false;

	const element = document.createElement("i");
	element.classList.add("icon", "bi", "bi-heart");
	element.style.padding = ".5rem .5rem .5rem 0";

	// Rellenar corazón y cambiar color
	// TODO Hacer fetch para añadir like
	/*
NO SOY CAPAZ A CAPTURAR EL ID DEL POST AL QUE SE LE DA LIKE
FALTA CREAR LA RUTA, me imagino será algo tipo post/:user_id/:post_id
*/

	fetch(``, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(),
	}).then(async (response) => {
		if (response.status === 200) {
			/* window.location.href = "/pages/perfil-de-usuario.html"; */
		} else {
			const data = await response.json();
			alert(data.msg);
		}
	});

	element.addEventListener("click", () => {
		clicked = !clicked;
		element.classList.toggle("bi-heart");
		element.classList.toggle("bi-heart-fill");
		element.classList.add("text-danger");
	});

	// Hover: cambiar color y aumentar contorno
	element.addEventListener("mouseover", () => {
		if (clicked) return;
		element.classList.toggle("text-danger");
	});

	// Blur: cambiar color y disminuir contorno
	element.addEventListener("mouseout", () => {
		if (clicked) return;
		element.classList.toggle("text-danger");
	});

	return element;
};

export const drawPosts = (posts) => {
	POST_WRAPPER.innerHTML = null;

	const fragment = document.createDocumentFragment();
	posts.forEach((post) => {
		const element = createPostElement(post);
		fragment.appendChild(element);
	});

	POST_WRAPPER.appendChild(fragment);
};
