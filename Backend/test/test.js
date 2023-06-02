import { assert } from "chai";
import { describe } from "mocha";

const mochaUser = {
	email: "mocha@mocha.com",
	password: "mocha",
	username: "mocha",
	name: "mocha",
	surname1: "mocha",
	surname2: "mocha",
	age: "999",
	city: "mocha",
	country: "mocha",
	studies: "mocha",
	languages: "mocha",
	linkedin: "mocha",
	hobbies: "mocha",
	role: "mocha",
};

describe("Batería de pruebas para el Backend y BBDD", () => {
	describe("Endpoint /register", () => {
		describe("Registrar un usuario incompleto", () => {
			it("devolver 400 al registrar un usuario sin algún campo obligatorio", (done) => {
				fetch("http://localhost:3000/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({}),
				}).then((response) => {
					assert.equal(response.status, 500);
					done();
				});
			});
		});

		describe("Registrar un usuario completo", () => {
			it("devolver 200 al registrar un usuario", (done) => {
				fetch("http://localhost:3000/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(mochaUser),
				}).then((response) => {
					assert.equal(response.status, 200);
					done();
				});
			});
		});

		describe("Registrar el mismo usuario de nuevo", () => {
			it("devolver 409 al intentar registrar un usuario con un email ya usado por otro usuario", (done) => {
				fetch("http://localhost:3000/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(mochaUser),
				}).then((response) => {
					assert.equal(response.status, 409);
					done();
				});
			});
		});
	});

	describe("Endpoint /user", () => {
		let token = "";
		before("200 haciendo el login y obtener el token para las siguientes pruebas", (done) => {
			fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: mochaUser.email,
					password: mochaUser.password,
				}),
			}).then((response) => {
				assert.equal(response.status, 200);
				response.json().then((body) => {
					token = body.token;
					done();
				});
			});
		});
		describe("Obtener datos del usuario logeado", () => {
			it("devolver 200 al obtener los datos del usuario", (done) => {
				fetch("http://localhost:3000/user", {
					method: "GET",
					headers: {
						Authorization: `${token}`,
					},
				}).then((response) => {
					assert.equal(response.status, 200);
					done();
				});
			});
		});

		describe("Obtener los amigos del usuario", () => {
			it("devolver 200", (done) => {
				fetch("http://localhost:3000/user/friends", {
					method: "GET",
					headers: {
						Authorization: `${token}`,
					},
				}).then((response) => {
					assert.equal(response.status, 200);
					done();
				});
			});
		});

		describe("Eliminar el usuario", () => {
			it("devolver 200 al eliminar el usuario", (done) => {
				fetch("http://localhost:3000/user", {
					method: "DELETE",
					headers: {
						Authorization: `${token}`,
					},
				}).then((response) => {
					assert.equal(response.status, 200);
					done();
				});
			});
		});

		describe("Comprobar que el usuario no existe", () => {
			it("no existe el usuario borrado", (done) => {
				fetch("http://localhost:3000/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: mochaUser.email,
						password: mochaUser.password,
					}),
				}).then((response) => {
					assert.equal(response.status, 404);
					done();
				});
			});
		});
	});
});
