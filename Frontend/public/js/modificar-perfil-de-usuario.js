let user;

/*
// cargar emailLogged desde localstorage y liberarlo
const getIdLogged = () => {
	const idLogged = localStorage.getItem("idLogged");
	return idLogged;
};
*/

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
	document.getElementById("avatar").src = user.picture;
};

const updateUser = (updatedUser) => {
	fetch(`http://localhost:3000/user`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: `${localStorage.getItem("token")}`,
		},
		body: JSON.stringify(updatedUser),
	}).then(async (response) => {
		if (response.status === 200) {
			window.location.href = "/pages/perfil-de-usuario.html";
		} else {
			const data = await response.json();
			alert(data.msg);
		}
	});
};

const elementUser = document.getElementById("saveBtn");
elementUser.addEventListener("click", () => {
	updateUser(getUserData());
});

//const user_id = localStorage.getItem("idLogged");
fetch(`http://localhost:3000/user`, {
	method: "GET",
	headers: {
		Authorization: `${localStorage.getItem("token")}`,
	},
}).then(async (response) => {
	const json = await response.json();
	renderUserData(json);
});
