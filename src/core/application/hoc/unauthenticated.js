import { compose } from "recompose";
import { path } from "ramda";
import { withConsumer, withGuard } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { Consumer } from "components/state/User/context";

export default compose(
  withConsumer(Consumer, "user"),
  withGuard(path(["user", "isAuthenticated"]), paths.customer.main)
);
