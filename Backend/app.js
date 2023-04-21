//Fichero donde se levanta el servidor
import loginRouter from "./Routes/login.routes.js";
import express from "express";
import cors from "cors";

const port = 3000;

class App {
	constructor() {
		this.app = express();
		this.routes();
		this.settings();
		this.init();
	}

	init() {
		try {
			this.app.listen(port);
			console.log(`Servidor iniciado en el puerto ${port}`);
		} catch (err) {
			console.error(`Error`, err.message);
		}
	}

	routes() {
		this.app.use("/login", loginRouter);
	}

	settings() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use((request, response, next) => {
			response.header("Access-Control-Allow-Origin", "http://localhost:5501"); //origen
			response.header("Access-Control-Allow-Headers", "Content-type, Authorization"); //cabeceras que admite
			response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); //metodos que estan adimitos
			next();
		});
	}
}
new App();
