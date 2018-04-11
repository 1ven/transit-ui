import { compose, withProps, withState, withHandlers } from "recompose";
import { withPersistedState, withConsumer } from "core/libraries/react/hoc";
import * as notificationsState from "components/state/Notifications/context";
import { Provider } from "./context";

export default compose(
  withConsumer(notificationsState.Consumer, "notifications"),
  withPersistedState("isAuthenticated", "setAuthenticated", false),
  withState("profile", "setProfile", null),
  withHandlers(props => ({
    successSignIn: () => () => {
      props.setAuthenticated(true);
    },
    successSignOut: () => () => {
      props.setAuthenticated(false);
    },
    successSignUp: () => profile => {
      props.setProfile(profile);
      props.setAuthenticated(true);
    },
    successProfileFetch: () => profile => {
      props.setProfile(profile);
    },
    successOnboarding: () => roleEntry => {
      props.setProfile(profile => ({ ...profile, role_entry: roleEntry }));
    }
  })),
  // TODO: implement context HOC, to eliminate repeating yourself
  withProps(p => ({
    value: {
      isAuthenticated: p.isAuthenticated,
      profile: p.profile,
      successSignIn: p.successSignIn,
      successSignOut: p.successSignOut,
      successSignUp: p.successSignUp,
      successProfileFetch: p.successProfileFetch,
      successOnboarding: p.successOnboarding
    }
  }))
)(Provider);
