import { createElement } from "react";
import type { RouteObject } from "react-router-dom";
import hola from "../pages/MainPage";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth";

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
      },
      {
        // publication offer view  - CUN "Publicacion de la Oferta de Trabajo"
        path: "/dashboard/publication",
      },
      {
        // filter view - CUN "Filtrar cvs y aplicacion de filtros"
        path: "/dashboard/recruitment",
      },
    ],
  },
];

export default routes;
