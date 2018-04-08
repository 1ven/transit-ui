import { compose } from "recompose";
import { path, not } from "ramda";
import { consumerToHoc, withGuard } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { Consumer } from "components/state/User/context";

export default compose(
  consumerToHoc(Consumer, "user"),
  withGuard(compose(not, path(["user", "isAuthenticated"])), paths.user.signIn)
);
