import Feed from "./views/Feed";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import PerfilUsuario, { loader as perfilUsuarioLoader } from "./views/PerfilUsuario";
import Registro from "./views/Registro";
import ListaAmigos from "./views/ListaAmigos";
import ModificarPerfil from "./views/ModificarPerfil";
import { ROUTES } from "./common/enums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

export default function App() {
	return <RouterProvider router={router} />;
}
