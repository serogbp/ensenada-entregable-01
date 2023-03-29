import { users as _users } from './users-data.js';
let users = _users;

let idUser = 1;
let user;

const findUser = (idUser) => {
    user = users.find(user => user.id === idUser);
}

const userData = (idUser) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            findUser(idUser);
            if (!user) {
                reject(new Error("Usuario no encontrado"));
            }
            else {
                document.getElementsByClassName('userData')[0].innerHTML = `${user.name.toUpperCase()} ${user.surname.toUpperCase()}`;
                document.getElementsByClassName('userData')[1].innerHTML = `${user.role}`;
                document.getElementsByClassName('userData')[2].innerHTML = `${user.name}`;
                document.getElementsByClassName('userData')[3].innerHTML = `${user.surname}`;
                document.getElementsByClassName('userData')[4].innerHTML = `${user.age}`;
                document.getElementsByClassName('userData')[5].innerHTML = `${user.city}`;
                document.getElementsByClassName('userData')[6].innerHTML = `${user.country}`;
                document.getElementsByClassName('userData')[7].innerHTML = `${user.studies}`;
                document.getElementsByClassName('userData')[8].innerHTML = `${user.languages}`;
                document.getElementsByClassName('userData')[9].innerHTML = `${user.linkedin}`;
                document.getElementsByClassName('userData')[10].innerHTML = `${user.hobbies}`;
                resolve();
            }
        }, 5);
    })
}

userData(idUser);

const delUser = document.getElementById('deleteUser');

const deleteUser = (idUser) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            findUser(idUser);
            if (!user) {
                reject(new Error("Usuario no encontrado"));
            }
            else {
                users.splice(users.indexOf(user.id), 1);
                resolve();
            }
        }, 1000);
    });
}

const onClickConfirm = async () => {
    try {
        await deleteUser(idUser);
        window.location.href = './registro.html';
    } catch (err) {
        alert(err.message);
        window.location.href = './perfil-de-usuario.html'
    }
}

delUser.addEventListener("click", onClickConfirm);
