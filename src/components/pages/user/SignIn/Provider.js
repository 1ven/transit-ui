import { compose, withProps } from "recompose";
import { signIn } from "model/user/api";
import { withPromise } from "core/libraries/react/hoc";
import View from "./View";

export default compose(
  withProps({
    initialValues: {
      email: "",
      password: ""
    }
  }),
  withPromise(signIn, "signIn")
)(View);
