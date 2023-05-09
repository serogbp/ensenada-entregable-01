import jwt from "jsonwebtoken";
import config from "../Settings/config.js";

export function isLogged(req, res, next) {
	const token = req.get("Authorization");
	if (token) {
		jwt.verify(token, config.jwt.clave, (err, tokenDecoded) => {
			if (err) {
				return res.status(401).json({ msg: "Token no valido" });
			}

			if (tokenDecoded) {
				return next();
			}
		});
	}
	//return res.status(401).json({ msg: "No hay token" });
}

/*

export function isLogged(req : express.Request,res : express.Response, next : express.NextFunction){
    let token : string | undefined = req.get(`Authorization`)

    if (token != undefined){
        jwt.verify(token, String(config.jwt.clave),(err:VerifyErrors|null, usuario :JwtPayload|undefined)=>{
          if(err){
              console.log('error');
              return res.status(401).json({msg : `token no valido`})
          }
          if (usuario!==undefined){
            return next()
          }
        })
    }
}*/
