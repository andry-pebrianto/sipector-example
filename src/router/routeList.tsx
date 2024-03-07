import { LazyExoticComponent, lazy } from "react";

export interface IRoute {
  path: string;
  name: string;
  element: LazyExoticComponent<() => JSX.Element>;
  children?: IRoute[];
}

const routeList: IRoute[] = [
  {
    path: "/page1",
    name: "Page1Page",
    element: lazy(() => import("../pages/page1")),
    children: [
      {
        path: "/page1/page2",
        name: "Page2Page",
        element: lazy(() => import("../pages/page2")),
        children: [
          {
            path: "/page1/page2/page3",
            name: "Page3Page",
            element: lazy(() => import("../pages/page3")),
            children: [
              {
                path: "/page1/page2/page3/page4",
                name: "Page4Page",
                element: lazy(() => import("../pages/page4")),
                children: [
                  {
                    path: "/page1/page2/page3/page4/page5",
                    name: "Page5Page",
                    element: lazy(() => import("../pages/page5")),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routeList;
