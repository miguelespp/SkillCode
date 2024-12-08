import { createElement } from "react";
import type { RouteObject } from "react-router-dom";
import hola from "../pages/MainPage";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth";
import Home from "../pages/dashboard/home";
import PublicationView from "../pages/dashboard/publication";
import RecruitmentView from "../pages/dashboard/recruitment";

const routes: RouteObject[] = [
	{
		// homepage
		path: "/",
		element: createElement(hola),
	},
	{
		// login page
		path: "/login",
		element: createElement(Login),
	},
	{
		// dashboard
		path: "/dashboard",
		element: createElement(Dashboard),
		children: [
			{
				// dashboard home
				path: "",
				element: createElement(Home),
			},
			{
				// publication offer view  - CUN "Publicacion de la Oferta de Trabajo"
				path: "/dashboard/publication",
				element: createElement(PublicationView),
			},
			{
				// filter view - CUN "Filtrar cvs y aplicacion de filtros"
				path: "/dashboard/recruitment",
				element: createElement(RecruitmentView),
			},
		],
	},
];

export default routes;
