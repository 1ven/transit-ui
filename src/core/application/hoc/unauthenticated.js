import { compose, branch } from "recompose";
import { path, F } from "ramda";
import { withConsumer } from "core/libraries/react/hoc";
import { Consumer } from "components/state/User/context";
import allow from "./allow";

export default compose(
  withConsumer(Consumer, "user"),
  branch(path(["user", "isAuthenticated"]), allow(F))
);
