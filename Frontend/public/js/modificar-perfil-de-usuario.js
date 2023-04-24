let user;

// cargar emailLogged desde localstorage y liberarlo
const getMail = () => {
	const emailLogged = JSON.parse(localStorage.getItem("emailLogged"));
	return emailLogged;
};

const getUserData = () => {
	let newUser = {};
	newUser.name = document.getElementById("name").value;
	newUser.surname1 = document.getElementById("surname1").value;
	newUser.surname2 = document.getElementById("surname2").value;
	newUser.city = document.getElementById("city").value;
	newUser.country = document.getElementById("country").value;
	newUser.age = document.getElementById("age").value;
	newUser.linkedin = document.getElementById("linkedin").value;
	newUser.studies = document.getElementById("studies").value;
	newUser.languages = document.getElementById("languages").value;
	newUser.hobbies = document.getElementById("hobbies").value;
	newUser.email = document.getElementById("email").value;
	newUser.role = document.getElementById("rol").value;
	return newUser;
};

const renderUserData = (user) => {
	let newUser = {};
	document.getElementById("name").value = user.name;
	document.getElementById("surname1").value = user.surname1;
	document.getElementById("surname2").value = user.surname2;
	document.getElementById("city").value = user.city;
	document.getElementById("country").value = user.country;
	document.getElementById("age").value = user.age;
	document.getElementById("linkedin").value = user.linkedin;
	document.getElementById("studies").value = user.studies;
	document.getElementById("languages").value = user.languages;
	document.getElementById("hobbies").value = user.hobbies;
	document.getElementById("email").value = user.email;
	document.getElementById("rol").value = user.role;
};

const saveUser = () => {
	localStorage.setItem("user", JSON.stringify(getUser()));
	console.log(localStorage.getItem("user"));
	window.location.href = "./perfil-de-usuario.html";
};

const updateUser = (updatedUser) => {
	fetch(`http://localhost:3000/user/${getMail()}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedUser),
	}).then(rs);
};

const elementUser = document.getElementById("saveBtn");
elementUser.addEventListener("click", saveUser);

const email = localStorage.getItem("emailLogged");
const params = new URLSearchParams({ email: email });
fetch(`http://localhost:3000/user/${email}`, {
	method: "GET",
}).then(async (response) => {
	const json = await response.json();
	renderUserData(json);
});
