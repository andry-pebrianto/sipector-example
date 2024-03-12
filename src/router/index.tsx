import { LazyExoticComponent } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { IRoute, privateRouteList } from "./routeList";
import MainLayout from "../layouts/MainLayout";

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
    <>
      <Route path="/" element={<MainLayout />}>
        {privateRouteList?.map((route, idx) =>
          mapRoutes(route, idx, route.element)
        )}
      </Route>
    </>
  )
);

export default router;
