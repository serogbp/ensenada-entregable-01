let user;

/* const findUser = (idUser) => {
	user = users.find((user) => user.id === idUser);
	return user;
}; */

// cargar datos desde localstorage y liberarlo
const loadUser = () => {
	user = JSON.parse(localStorage.getItem("user"));
	return user;
};

//mostrar datos
const userData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			loadUser();
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

userData();

//TODO => botton guardar que modifique el array

const eleUser = document.getElementById("saveBtn");

const getUser = () => {
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
	newUser.role = user.role;
	return newUser;
};

const saveUser = () => {
	localStorage.setItem("user", JSON.stringify(getUser()));
	console.log(localStorage.getItem("user"));
	window.location.href = "./perfil-de-usuario.html";
};

eleUser.addEventListener("click", saveUser);

//TODO => si hay tiempo, que se modifique la foto.
