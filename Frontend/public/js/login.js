document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault(); // previene que se recargue la página al enviar el formulario

	const body = {
		email: document.querySelector("#usuario").value,
		password: document.querySelector("#contrasena").value,
	};

	fetch("http://10.211.55.4:3000/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then(async (response) => {
		if (response.status === 200) {
			window.location.href = "/pages/feed.html";
		} else {
			alert("Credenciales inválidas");
		}
	});
});
