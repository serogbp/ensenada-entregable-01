const deleteUser = (user_id) => {
	fetch(`http://localhost:3000/user/${user_id}`, {
		method: "DELETE",
	}).then(async (response) => {
		if (response.status === 200) {
			window.location.href = "/index.html";
			localStorage.removeItem("emailLogged");
		} else {
			const data = await response.json();
			alert(`Error eliminando el usuario: ${data.msg}`);
			window.location.href = "./perfil-de-usuario.html";
		}
	});
};

const onClickConfirm = async () => {
	deleteUser(localStorage.getItem("idLogged"));
};

const delUser = document.getElementById("deleteUser");
delUser.addEventListener("click", onClickConfirm);

const renderUserData = (user) => {
	const userDataElements = document.getElementsByClassName("userData");
	userDataElements[0].innerHTML = `${user.name.toUpperCase()} ${user.surname1.toUpperCase()}  ${user.surname2.toUpperCase()}`;
	userDataElements[1].innerHTML = `${user.role}`;
	userDataElements[2].innerHTML = `${user.name}`;
	userDataElements[3].innerHTML = `${user.surname1} ${user.surname2}`;
	userDataElements[4].innerHTML = `${user.age}`;
	userDataElements[5].innerHTML = `${user.city}`;
	userDataElements[6].innerHTML = `${user.country}`;
	userDataElements[7].innerHTML = `${user.studies}`;
	userDataElements[8].innerHTML = `${user.languages}`;
	userDataElements[9].innerHTML = `${user.linkedin}`;
	userDataElements[10].innerHTML = `${user.hobbies}`;
	document.getElementById("avatar").src = user.picture;
};

// Obtener los parámetros de la url
const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
const friendID = params.user_id;

// Esconder botones editar y eliminar si se muestra perfil de un amigo
if (friendID) {
	document.getElementById("editUser").style.display = "none";

	// Cargar datos amigo
	fetch(`http://localhost:3000/user/${friendID}`, {
		method: "GET",
	}).then(async (response) => {
		const json = await response.json();
		renderUserData(json);
	});
} else {
	// Cargar datos usuario logeado
	fetch(`http://localhost:3000/user`, {
		method: "GET",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
	}).then(async (response) => {
		const json = await response.json();
		renderUserData(json);
	});
}
