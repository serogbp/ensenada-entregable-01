//Fichero donde se levanta el servidor
import config from "./Settings/config.js";
import loginRouter from "./Routes/login.routes.js";
import registerRouter from "./Routes/register.routes.js";
import userRouter from "./Routes/user.routes.js";
import postRouter from "./Routes/post.routes.js";
import friendRouter from "./Routes/friend.routes.js";
import express from "express";
import cors from "cors";

/* var corsOptions = {
	origin: "http://10.211.55.4:5500",
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
			this.app.listen(config.app.port);
			console.log(`Servidor iniciado en el puerto ${config.app.port}`);
		} catch (err) {
			console.error(`Error`, err.message);
		}
	}

	routes() {
		this.app.use("/login", loginRouter);
		this.app.use("/register", registerRouter);
		this.app.use("/user", userRouter);
		this.app.use("/post", postRouter);
		this.app.use("/friend", friendRouter);
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
