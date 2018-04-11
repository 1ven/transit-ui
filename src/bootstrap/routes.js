import { renderRoutes } from "react-router-config";
import createBrowserHistory from "history/createBrowserHistory";
import paths from "core/application/paths";
import * as customer from "components/pages/customer";
import * as user from "components/pages/user";

const Root = ({ route }) => renderRoutes(route.routes);

export const history = createBrowserHistory();

export const routes = renderRoutes([
  {
    component: Root,
    routes: [
      {
        path: paths.customer.main,
        exact: true,
        component: customer.List
      },
      {
        path: paths.user.signIn,
        exact: true,
        component: user.SignIn
      },
      {
        path: paths.customer.signUp,
        exact: true,
        component: customer.SignUp
      },
      {
        path: paths.customer.onboarding,
        exact: true,
        component: customer.Onboarding
      }
    ]
  }
]);
