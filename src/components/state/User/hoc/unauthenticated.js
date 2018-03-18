import { compose, lifecycle, branch, renderNothing } from "recompose";
import { path } from "ramda";
import { withRouter } from "react-router-dom";
import { consumerToHoc } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import { Consumer } from "../";

export default compose(
  withRouter,
  consumerToHoc(Consumer, "user"),
  lifecycle({
    // TODO: handle componentWillReceiveProps case
    componentDidMount() {
      const { user, history } = this.props;

      if (user.isAuthenticated) {
        history.replace(paths.main);
      }
    }
  }),
  /**
   * Don't rendering anything if user is not authenticated.
   */
  branch(path(["user", "isAuthenticated"]), renderNothing)
);
