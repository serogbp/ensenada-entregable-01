document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault(); // previene que se recargue la página al enviar el formulario

	const body = {
		email: document.querySelector("#usuario").value,
		password: document.querySelector("#contrasena").value,
	};

	fetch("http://localhost:3000/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	})
		.then(async (response) => {
			if (response.status === 200) {
				const body = await response.json();
				localStorage.setItem("idLogged", body.user_id);
				window.location.href = "/pages/feed.html";
			} else {
				const data = await response.json();
				alert(data.msg);
			}
		})
		.catch((error) => {
			console.log(error);
		});
});
