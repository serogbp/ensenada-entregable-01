const users = [{
    id: 1, name: "Manuel", surname: "Fernandez Fernandez", age: 30, city: "Gijon", country: "España",
    studies: "Ciclo Formativo Grado Superior Desarrollo de Aplicaciones Ciclo Formativo Grado Medio Tecnico en Sistemas", role: "Software Developer", languages: "Castellano Ingles Aleman Italiano", linkedin: "https://www.linkedin.com/manuel-fernandez-fernandez-profile.html",
    hobbies: "Ciclismo Senderismo"
}]


idUser = 1;

function userData(idUser) {
    const result = users.find(({ id }) => id === idUser);

    document.getElementsByClassName('userData')[0].innerHTML = `${result.name.toUpperCase()} ${result.surname.toUpperCase()}`;
    document.getElementsByClassName('userData')[1].innerHTML = `${result.role}`;
    document.getElementsByClassName('userData')[2].innerHTML = `${result.name}`;
    document.getElementsByClassName('userData')[3].innerHTML = `${result.surname}`;
    document.getElementsByClassName('userData')[4].innerHTML = `${result.age}`;
    document.getElementsByClassName('userData')[5].innerHTML = `${result.city}`;
    document.getElementsByClassName('userData')[6].innerHTML = `${result.country}`;
    document.getElementsByClassName('userData')[7].innerHTML = `${result.studies}`;
    document.getElementsByClassName('userData')[8].innerHTML = `${result.languages}`;
    document.getElementsByClassName('userData')[9].innerHTML = `${result.linkedin}`;
    document.getElementsByClassName('userData')[10].innerHTML = `${result.hobbies}`;

}

userData(idUser);

//TODO => implementar borrar cuenta
