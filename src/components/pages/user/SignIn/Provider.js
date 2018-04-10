import { compose } from "recompose";
import {
  withSuccess,
  withClientErrorMessage
} from "core/libraries/with-promise-hoc/middlewares";
import { consumerToHoc } from "core/libraries/react/hoc";
import { withPromise, unauthenticated } from "core/application/hoc";
import { signIn } from "model/user/api";
import * as userState from "components/state/User/context";
import * as notificationsState from "components/state/Notifications/context";
import View from "./View";

export default compose(
  unauthenticated,
  consumerToHoc(userState.Consumer, "user"),
  consumerToHoc(notificationsState.Consumer, "notifications"),
  withPromise(signIn, "signIn", props =>
    compose(
      withClientErrorMessage(props.notifications.add),
      withSuccess(() => {
        props.user.successSignIn();
      })
    )
  )
)(View);
