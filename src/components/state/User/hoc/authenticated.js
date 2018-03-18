import { compose, lifecycle, branch, renderNothing } from "recompose";
import { path, not } from "ramda";
import { withRouter } from "react-router-dom";
import { consumerToHoc, listenPropUpdate } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { Consumer } from "../";

export default compose(
  withRouter,
  consumerToHoc(Consumer, "user"),
  listenPropUpdate(path(["user", "isAuthenticated"]), ({ user, history }) => {
    if (!user.isAuthenticated) {
      history.replace(paths.signIn);
    }
  }),
  /**
   * Don't rendering anything if user is not authenticated.
   */
  branch(compose(not, path(["user", "isAuthenticated"])), renderNothing)
);
