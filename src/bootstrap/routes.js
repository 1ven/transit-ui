import { renderRoutes } from "react-router-config";
import createBrowserHistory from "history/createBrowserHistory";
import paths from "core/application/paths";
import * as product from "components/pages/product";
import * as user from "components/pages/user";

const Root = ({ route }) => renderRoutes(route.routes);

export const history = createBrowserHistory();

export const routes = renderRoutes([
  {
    component: Root,
    routes: [
      {
        path: paths.main,
        exact: true,
        component: product.List
      },
      {
        path: paths.signIn,
        exact: true,
        component: user.SignIn
      }
    ]
  }
]);
