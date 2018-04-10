import { compose } from "recompose";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import { consumerToHoc } from "core/libraries/react/hoc";
import { withPromise, authenticated } from "core/application/hoc";
import { signOut } from "model/user/api";
import * as userState from "components/state/User/context";
import View from "./View";

export default compose(
  authenticated,
  consumerToHoc(userState.Consumer, "user"),
  withPromise(signOut, "signOut", props =>
    withSuccess(() => {
      props.user.successSignOut();
    })
  )
)(View);
