import { compose } from "recompose";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import { withConsumer } from "core/libraries/react/hoc";
import { withPromise, allow } from "core/application/hoc";
import { signOut } from "model/user/api";
import { isOnboardedCustomer } from "model/user/utils/states";
import * as userState from "components/state/User/context";
import View from "./View";

export default compose(
  allow(isOnboardedCustomer),
  withConsumer(userState.Consumer, "user"),
  withPromise(signOut, "signOut", props =>
    withSuccess(() => {
      props.user.successSignOut();
    })
  )
)(View);
