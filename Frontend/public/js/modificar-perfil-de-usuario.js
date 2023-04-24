let user;

// cargar emailLogged desde localstorage y liberarlo
const getMail = () => {
	emailLogged = JSON.parse(localStorage.getItem("emailLogged"));
	return emailLogged;
};

//mostrar datos
/* const userData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			getMail();
			if (!user) {
				reject(new Error("Usuario no encontrado"));
			} else {
				document.getElementsByClassName("loadData")[0].value = ` ${user.name}`;
				document.getElementsByClassName("loadData")[1].value = ` ${user.surname1}`;
				document.getElementsByClassName("loadData")[2].value = ` ${user.surname2}`;
				document.getElementsByClassName("loadData")[3].value = ` ${user.city}`;
				document.getElementsByClassName("loadData")[4].value = ` ${user.country}`;
				document.getElementsByClassName("loadData")[5].value = ` ${user.age}`;
				document.getElementsByClassName("loadData")[6].value = ` ${user.linkedin}`;
				document.getElementsByClassName("loadData")[7].value = ` ${user.studies}`;
				document.getElementsByClassName("loadData")[8].value = ` ${user.languages}`;
				document.getElementsByClassName("loadData")[9].value = ` ${user.hobbies}`;
				document.getElementsByClassName("loadData")[10].value = ` ${user.email}`;
				resolve();
			}
		}, 5);
	});
};

userData(); */

//TODO => botton guardar que modifique el array

const elementUser = document.getElementById("saveBtn");

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
	document.getElementById("role").value = user.role;
};

const saveUser = () => {
	localStorage.setItem("user", JSON.stringify(getUser()));
	console.log(localStorage.getItem("user"));
	window.location.href = "./perfil-de-usuario.html";
};

elementUser.addEventListener("click", saveUser);

fetch(`http://localhost:3000/user/${getMail()}`, {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(body),
})
	.then((response) => response.json())
	.then((data) => {
		renderUserData(data);
	});

const updateUser = (updatedUser) => {
	fetch(`http://localhost:3000/user/${getMail()}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedUser),
	}).then(rs);
};
