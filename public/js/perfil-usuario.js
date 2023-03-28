
import { users as _users } from './users-data.js';
let users = _users;

let idUser = 1;

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

//TODO => implementar promesas en borrar cuenta
//TODO => revisar link a landing page


const delUser = document.getElementById('deleteUser');

const deleteUser = async (idDelete) => {
    users.splice(users.indexOf(users.find(({ id }) => id === idDelete)), 1);

}

const callbackLanding = () => {
    window.location.href = './index.html';
}

const onClickConfirm = async () => {
    await setTimeout(() => {
        deleteUser(idUser);
    }, 5000);
    callbackLanding();

}


delUser.addEventListener("click", onClickConfirm);