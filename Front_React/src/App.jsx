import Feed from "./views/Feed";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import PerfilUsuario, { loader as perfilUsuarioLoader } from "./views/PerfilUsuario";
import Registro from "./views/Registro";
import ListaAmigos from "./views/ListaAmigos";
import ModificarPerfil from "./views/ModificarPerfil";
import Admin from "./views/Admin";
import { ROUTES } from "./common/enums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as bootstrap from "bootstrap";

const router = createBrowserRouter([
	{
		path: ROUTES.LANDING,
		element: <LandingPage />,
	},
	{
		path: ROUTES.LOGIN,
		element: <Login />,
	},
	{
		path: ROUTES.REGISTER,
		element: <Registro />,
	},
	{
		path: ROUTES.PROFILE,
		element: <PerfilUsuario />,
		// loader: perfilUsuarioLoader,
	},
	{
		path: ROUTES.PROFILE_ID,
		element: <PerfilUsuario />,
		// loader: perfilUsuarioLoader,
	},
	{
		path: ROUTES.PROFILE_EDIT,
		element: <ModificarPerfil />,
	},
	{
		path: ROUTES.FEED,
		element: <Feed />,
	},
	{
		path: ROUTES.FRIENDS,
		element: <ListaAmigos />,
	},
	{
		path: ROUTES.ADMIN,
		element: <Admin />,
	},
]);

export default function App() {
	window.bootstrap = bootstrap;
	return <RouterProvider router={router} />;
}
