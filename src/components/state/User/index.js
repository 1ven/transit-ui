import { createContext } from "react";
import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";
import { withPromise, withPersistedState } from "core/libraries/react/hoc";
import * as request from "core/packages/request";
import paths from "core/application/paths";
import { consumerToHoc } from "core/libraries/react/hoc";
import { signIn, signOut } from "model/user/api";
import * as notificationsState from "../Notifications";

const Context = createContext();

export default compose(
  withRouter,
  consumerToHoc(notificationsState.Consumer, "notifications"),
  withPersistedState("isAuthenticated", "setAuthenticated", false),
  withPromise(signIn, "signIn", props => ({
    onSuccess: () => {
      props.setAuthenticated(true);
    },
    // TODO: move that logic to `withHandledPromise` or similar name
    onFailure: err => {
      if (err instanceof request.ConnectionError) {
        return alert("Connection error");
      }
      if (err instanceof request.TimeoutError) {
        return alert("Timeout error");
      }
      if (err instanceof request.ServerError) {
        return alert("Server error");
      }
      if (err instanceof request.ClientError && err.data.message) {
        return props.notifications.add(err.data.message);
      }
      throw err;
    }
  })),
  withPromise(signOut, "signOut", props => ({
    onSuccess: () => {
      props.setAuthenticated(false);
    }
  })),
  withProps(p => ({
    value: {
      isAuthenticated: p.isAuthenticated,
      signIn: p.signIn,
      signOut: p.signOut
    }
  }))
)(Context.Provider);

export const Consumer = Context.Consumer;
