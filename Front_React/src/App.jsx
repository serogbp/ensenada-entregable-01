import Feed from "./views/Feed";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import PerfilUsuario, { loader as perfilUsuarioLoader } from "./views/PerfilUsuario";
import Registro from "./views/Registro";
import ListaAmigos from "./views/ListaAmigos";
import { ROUTES } from "./common/enums";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useTheme from "./hooks/useTheme";

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
		loader: perfilUsuarioLoader,
	},
	{
		path: ROUTES.PROFILE_ID,
		element: <PerfilUsuario />,
		loader: perfilUsuarioLoader,
	},
	{
		path: ROUTES.PROFILE_EDIT,
		// element: <ModificarPerfilUsuario />,
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
	const { changeTheme } = useTheme();

	// Cambiar theme de la app acorde con el theme del dispositivo
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		changeTheme();
	});

	return <RouterProvider router={router} />;
}
