import { compose, withProps, withState } from "recompose";
import { withPersistedState, consumerToHoc } from "core/libraries/react/hoc";
import {
  withSuccess,
  withClientErrorMessage
} from "core/libraries/with-promise-hoc/middlewares";
import { withPromise } from "core/application/hoc";
import { signIn, signOut, signUp, fetchUser } from "model/user/api";
import * as notificationsState from "components/state/Notifications/context";
import { Provider } from "./context";

export default compose(
  consumerToHoc(notificationsState.Consumer, "notifications"),
  withPersistedState("isAuthenticated", "setAuthenticated", false),
  withState("profile", "setProfile", null),
  withPromise(signIn, "signIn", props =>
    compose(
      withClientErrorMessage(props.notifications.add),
      withSuccess(() => {
        props.setAuthenticated(true);
      })
    )
  ),
  withPromise(signOut, "signOut", props =>
    withSuccess(() => {
      props.setAuthenticated(false);
    })
  ),
  withPromise(signUp, "signUp", props =>
    withSuccess(profile => {
      props.setProfile(profile);
      props.setAuthenticated(true);
    })
  ),
  withPromise(fetchUser, "fetchUser", props =>
    withSuccess(profile => {
      props.setProfile(profile);
    })
  ),
  withProps(p => ({
    value: {
      isAuthenticated: p.isAuthenticated,
      signIn: p.signIn,
      signOut: p.signOut,
      signUp: p.signUp,
      fetchUser: p.fetchUser // call that in guards, like authenticated etc
    }
  }))
)(Provider);
