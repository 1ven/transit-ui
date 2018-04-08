import { compose } from "recompose";
import { path } from "ramda";
import { consumerToHoc, withGuard } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { Consumer } from "components/state/User/context";

export default compose(
  consumerToHoc(Consumer, "user"),
  withGuard(path(["user", "isAuthenticated"]), paths.customer.main)
);
