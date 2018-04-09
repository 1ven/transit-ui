import { compose } from "recompose";
import { identity } from "ramda";
import withPromiseHoc from "core/packages/with-promise-hoc";
import { consumerToHoc } from "core/libraries/react/hoc";
import { withServerError } from "core/libraries/with-promise-hoc/middlewares";
import { Consumer } from "components/state/Notifications/context";

export default (fn, key, propsToMiddleware = () => identity) =>
  compose(
    consumerToHoc(Consumer, "notifications"),
    withPromiseHoc(fn, key, props =>
      compose(
        withServerError(props.notifications.add),
        propsToMiddleware(props)
      )
    )
  );
