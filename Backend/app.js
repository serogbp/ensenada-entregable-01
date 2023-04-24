//Fichero donde se levanta el servidor
import loginRouter from "./Routes/login.routes.js";
import registerRouter from "./Routes/register.routes.js";
import userRouter from "./Routes/user.routes.js";
import express from "express";
import cors from "cors";

const port = 3000;
/* var corsOptions = {
	origin: "http://10.211.55.4:5501",
}; */

class App {
	constructor() {
		this.app = express();
		this.settings();
		this.routes();
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
		this.app.use("/register", registerRouter);
		this.app.use("/user", userRouter);
	}

	settings() {
		this.app.use(express.json());
		this.app.use(cors());
		/* 		this.app.use((request, response, next) => {
			response.header("Access-Control-Allow-Origin", "*"); //origen
			response.header("Access-Control-Allow-Credentials", "true");
			response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Acept"); //cabeceras que admite
			response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); //metodos que estan adimitos
			next();
		}); */
	}
}
new App();
