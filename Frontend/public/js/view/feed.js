const POST_WRAPPER = document.getElementById("post-wrapper");

const createPostElement = (post) => {
	const element = document.createElement("div");
	element.classList.add("card", "post", "rounded-3", "p-0");
	if (post.content.imageUrl !== "") element.appendChild(postImage(post.content.imageUrl));

	const elementBody = document.createElement("div");
	elementBody.classList.add("p-4", "d-flex", "flex-column", "gap-3");
	elementBody.appendChild(postHeader(post.user));
	elementBody.appendChild(postContent(post.content));

	element.appendChild(elementBody);

	return element;
};

const postImage = (url) => {
	const element = document.createElement("img");
	element.classList.add("rounded-top-3");
	element.src = url;
	element.alt = "Imagen del post";
	return element;
};

const postHeader = (user) => {
	const element = document.createElement("div");
	element.classList.add("post__user-info");
	element.innerHTML = `
	<div class="d-flex gap-4">
		<img class="avatar" src="${user.picture.large}" alt="Imagen del usuario"/>
		<div class="doble-texto">
			<p>${user.name.first} ${user.name.last}</p>
			<p>${user.login.username}</p>
		</div>
	</div>

	<div class="icon-wrapper">
		<i class="icon bi bi-three-dots"></i>
	</div>
	`;
	return element;
};

const postContent = (post) => {
	const element = document.createElement("div");
	element.classList.add("d-flex", "flex-column", "gap-2");

	element.innerHTML = `
		<p class="h3">${post.title}</p>
		<div class="d-flex flex-wrap gap-2">
			${post.tags.map((tag) => `<p class="badge text-bg-light mb-0">${tag}</p>`).join("")}
		</div>
	`;
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
