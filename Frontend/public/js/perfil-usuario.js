		}
	});
};


const delUser = document.getElementById("deleteUser");

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
};

const email = localStorage.getItem("emailLogged");
fetch(`http://localhost:3000/user/${email}`, {
	method: "GET",
}).then(async (response) => {
	const json = await response.json();
	renderUserData(json);
});
