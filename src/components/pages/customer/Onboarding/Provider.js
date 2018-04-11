import { compose } from "recompose";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import { withAsyncValidation } from "core/libraries/final-form";
import { withConsumer } from "core/libraries/react/hoc";
import { withPromise, allow } from "core/application/hoc";
import { onboarding } from "model/roles/customer/api";
import { isSignedUpCustomer } from "model/user/utils/states";
import * as userState from "components/state/User/context";
import View from "./View";

export default compose(
  allow(isSignedUpCustomer),
  withConsumer(userState.Consumer, "user"),
  withPromise(onboarding, "onboardingRequest", props =>
    compose(
      withAsyncValidation,
      withSuccess(roleEntry => {
        props.user.successOnboarding(roleEntry);
      })
    )
  )
)(View);
