import { LazyExoticComponent } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import routeList, { IRoute } from "./routeList";

const mapRoutes = (
  route: IRoute,
  idx: number,
  Page: LazyExoticComponent<() => JSX.Element>
) => {
  return route.children?.length ? (
    <Route
      key={idx}
      path={route.path}
      handle={{
        name: route.name,
      }}
    >
      <Route index element={<Page />} />
      {route.children.map((child, idx) => mapRoutes(child, idx, child.element))}
    </Route>
  ) : (
    <Route
      key={idx}
      path={route.path}
      element={<Page />}
      handle={{
        name: route.name,
      }}
    />
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>{routeList?.map((route, idx) => mapRoutes(route, idx, route.element))}</>
  )
);

export default router;
