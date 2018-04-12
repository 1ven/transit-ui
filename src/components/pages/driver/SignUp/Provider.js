import { compose } from "recompose";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import { withAsyncValidation } from "core/libraries/final-form";
import { withConsumer } from "core/libraries/react/hoc";
import { withPromise, unauthenticated } from "core/application/hoc";
import { signUp } from "model/user/api";
import * as userState from "components/state/User/context";
import View from "./View";

export default compose(
  unauthenticated,
  withConsumer(userState.Consumer, "user"),
  withPromise(signUp, "signUp", props =>
    compose(
      withAsyncValidation,
      withSuccess(profile => {
        props.user.successSignUp(profile);
      })
    )
  )
)(View);
