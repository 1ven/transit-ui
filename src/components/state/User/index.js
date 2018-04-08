import { compose, withProps } from "recompose";
import { withPersistedState } from "core/libraries/react/hoc";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import { withPromise } from "core/application/hoc";
import { signIn, signOut } from "model/user/api";
import { Provider } from "./context";

export default compose(
  withPersistedState("isAuthenticated", "setAuthenticated", false),
  withPromise(signIn, "signIn", props =>
    withSuccess(() => {
      props.setAuthenticated(true);
    })
  ),
  withPromise(signOut, "signOut", props =>
    withSuccess(() => {
      props.setAuthenticated(false);
    })
  ),
  withProps(p => ({
    value: {
      isAuthenticated: p.isAuthenticated,
      signIn: p.signIn,
      signOut: p.signOut
    }
  }))
)(Provider);
