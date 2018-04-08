import { compose } from "recompose";
import { identity } from "ramda";
import withPromiseHoc from "core/packages/with-promise-hoc";
import * as request from "core/packages/request";
import { consumerToHoc } from "core/libraries/react/hoc";
import { Consumer } from "components/state/Notifications/context";

export default (fn, key, propsToMiddleware = () => identity) =>
  compose(
    consumerToHoc(Consumer, "notifications"),
    withPromiseHoc(fn, key, props =>
      compose(withErrors(props), propsToMiddleware(props))
    )
  );

const withErrors = props => next => async (...args) => {
  try {
    return await next(...args);
  } catch (err) {
    if (err instanceof request.ConnectionError) {
      return props.notifications.add("Connection error");
    }
    if (err instanceof request.TimeoutError) {
      return props.notifications.add("Timeout error");
    }
    if (err instanceof request.ServerError) {
      return props.notifications.add("Server error");
    }
    if (err instanceof request.ClientError && err.data.message) {
      return props.notifications.add(err.data.message);
    }
    throw err;
  }
};
