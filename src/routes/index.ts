import { createElement } from "react";
import type { RouteObject } from "react-router-dom";
import hola from "../pages/MainPage";

const routes: RouteObject[] = [
  {
    // homepage
    path: "/",
    element: createElement(hola),
  },
  {
    // login page
    path: "/login",
  },
  {
    // dashboard
    path: "/dashboard",
    children: [
      {
        // dashboard home
        path: "/dashboard",
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
