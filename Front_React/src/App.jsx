import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import PerfilUsuario from "./views/PerfilUsuario";
import Registro from "./views/Registro";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Registro />,
	},
	{
		path: "/profile",
		element: <PerfilUsuario />,
	},
	{
		path: "/profile/:id",
		element: <PerfilUsuario />,
	},
	{
		path: "/profile/edit",
		// element: <ModificarPerfilUsuario />,
	},
	{
		path: "/feed",
		// element: <Feed />,
	},
	{
		path: "/friends",
		// element: <ListaAmigos />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
