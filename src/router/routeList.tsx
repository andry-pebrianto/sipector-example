import { LazyExoticComponent, lazy } from "react";

export interface IRoute {
  path: string;
  name: string;
  element: LazyExoticComponent<() => JSX.Element>;
  children?: IRoute[];
}

export const privateRouteList: IRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard Page",
    element: lazy(() => import("../pages/dashboard")),
  },
  {
    path: "/backoffice",
    name: "Back Office",
    element: lazy(() => import("../pages/NotFound")),
    children: [
      {
        path: "/backoffice/city",
        name: "City Page",
        element: lazy(() => import("../pages/backoffice/city")),
      },
      {
        path: "/backoffice/country",
        name: "Country Page",
        element: lazy(() => import("../pages/backoffice/country")),
      },
      {
        path: "/backoffice/global",
        name: "Global Page",
        element: lazy(() => import("../pages/backoffice/global")),
      },
    ],
  },
];
