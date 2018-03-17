import { renderRoutes } from "react-router-config";
import createBrowserHistory from "history/createBrowserHistory";
import * as pages from "components/pages";

const Root = ({ route }) => renderRoutes(route.routes);

export const history = createBrowserHistory();

export const paths = {
  main: "/",
  signIn: "/auth/sign-in"
};

export const routes = renderRoutes([
  {
    component: Root,
    routes: [
      {
        path: paths.main,
        exact: true,
        component: pages.Main
      },
      {
        path: paths.signIn,
        exact: true,
        component: pages.SignIn
      }
    ]
  }
]);
