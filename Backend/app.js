//Fichero donde se levanta el servidor
import config from "./Settings/config.js";
import loginRouter from "./Routes/login.routes.js";
import registerRouter from "./Routes/register.routes.js";
import userRouter from "./Routes/user.routes.js";
import postRouter from "./Routes/post.routes.js";
import friendRouter from "./Routes/friend.routes.js";
import feedbackRouter from "./Routes/feedback.routes.js";
import adminRouter from "./Routes/admin.routes.js";
import express from "express";
import cors from "cors";

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
		this.app.use("/feedback", feedbackRouter);
		this.app.use("/admin", adminRouter);
	}

	settings() {
		this.app.use(express.json());
		this.app.use(cors());
	}
}
new App();
