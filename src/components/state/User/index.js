import { withRouter } from "react-router-dom";
import { createContext } from "react";
import { compose, withProps } from "recompose";
import { withPromise, withPersistedState } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { signIn, signOut } from "model/user/api";

const Context = createContext();

export default compose(
  withRouter,
  withPersistedState("isAuthenticated", "setAuthenticated", false),
  withPromise(signIn, "signIn", props => ({
    onSuccess: () => {
      props.setAuthenticated(true);
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
