import { withRouter } from "react-router-dom";
import { createContext } from "react";
import { compose, withProps } from "recompose";
import { withPromise, withPersistedState } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { signIn } from "model/user/api";

const Context = createContext();

export default compose(
  withRouter,
  withPersistedState("isAuthenticated", "setAuthenticated", false),
  withPromise(signIn, "signIn", props => ({
    onSuccess: () => {
      props.setAuthenticated(true);
    }
  })),
  withProps(p => ({
    value: {
      isAuthenticated: p.isAuthenticated,
      signIn: p.signIn
    }
  }))
)(Context.Provider);

export const Consumer = Context.Consumer;
