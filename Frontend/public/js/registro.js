const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	createUser();
});

const createUser = () => {
	form.querySelectorAll("input");
	const user = {
		email: form[0].value,
		password: form[1].value,
		username: form[2].value,
		name: form[3].value,
		surname1: form[4].value,
		surname2: form[5].value,
		age: form[6].value,
		city: form[7].value,
		country: form[8].value,
		studies: form[9].value,
		languages: form[10].value,
		linkedin: form[11].value,
		hobbies: form[12].value,
		role: form[13].value,
	};

	//10.211.55.4
	fetch("http://localhost:3000/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}).then(async (response) => {
		if (response.status === 200) {
			localStorage.setItem("emailLogged", user.email);
			window.location.href = "/pages/feed.html";
		} else {
			const data = await response.json();
			alert(data.msg);
		}
	});
};
