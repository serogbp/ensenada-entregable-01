import { users as _users } from "./users-data.js";
let users = _users;

let idUser = 1;
let user;

/* 	1- buscar el usuario en el array por id
	2- guardar en localstorage el usuario desde el array
	3- cargar desde localstorage el user
	4- mostrar datos del usuario
	5- eliminar cuenta
		5.1- al eliminar cuenta eliminar datos del localstorage
*/

// buscar usuario en el array por id
const findUser = (idUser) => {
	if (localStorage.getItem("user") === null) {
		user = users.find((user) => user.id === idUser);
		saveUser(user);
		if (!user) {
			return alert("Usuario no encontrado");
		}
		return user;
	}
};

// guardar usuario en el localstorage
const saveUser = (user) => {
	localStorage.setItem("user", JSON.stringify(user));
};

//cargar user desde localstoreage
const loadUser = () => {
	user = JSON.parse(localStorage.getItem("user"));
	return user;
};

// mostrar los datos del usuario
const userData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			findUser(idUser);
			loadUser();
			if (!user) {
				reject(new Error("Usuario no encontrado"));
			} else {
				document.getElementsByClassName(
					"userData"
				)[0].innerHTML = `${user.name.toUpperCase()} ${user.surname1.toUpperCase()}  ${user.surname2.toUpperCase()}`;
				document.getElementsByClassName("userData")[1].innerHTML = `${user.role}`;
				document.getElementsByClassName("userData")[2].innerHTML = `${user.name}`;
				document.getElementsByClassName("userData")[3].innerHTML = `${user.surname1} ${user.surname2}`;
				document.getElementsByClassName("userData")[4].innerHTML = `${user.age}`;
				document.getElementsByClassName("userData")[5].innerHTML = `${user.city}`;
				document.getElementsByClassName("userData")[6].innerHTML = `${user.country}`;
				document.getElementsByClassName("userData")[7].innerHTML = `${user.studies}`;
				document.getElementsByClassName("userData")[8].innerHTML = `${user.languages}`;
				document.getElementsByClassName("userData")[9].innerHTML = `${user.linkedin}`;
				document.getElementsByClassName("userData")[10].innerHTML = `${user.hobbies}`;
				resolve();
			}
		}, 5);
	});
};

userData();

const delUser = document.getElementById("deleteUser");

const deleteUser = (idUser) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			findUser(idUser);
			if (!user) {
				reject(new Error("Usuario no encontrado"));
			} else {
				/* users.splice(users.indexOf(user.id), 1); */
				localStorage.clear();
				resolve();
			}
		}, 1000);
	});
};

const onClickConfirm = async () => {
	try {
		await deleteUser(idUser);
		window.location.href = "/index.html";
	} catch (err) {
		alert(err.message);
		window.location.href = "./perfil-de-usuario.html";
	}
};

delUser.addEventListener("click", onClickConfirm);
