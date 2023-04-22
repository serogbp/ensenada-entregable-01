fetch("http://10.211.55.4:3000/register", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(body),
}).then(async (response) => {
	if (response.status === 200) {
		window.location.href = "/pages/feed.html";
	} else {
		alert("Datos incorrectos");
	}
});
