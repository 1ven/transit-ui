import { compose, branch, renderNothing } from "recompose";
import { withRouter } from "react-router-dom";
import listenPropUpdate from "./listenPropUpdate";

export default (propsToValue, path) =>
  compose(
    withRouter,
    listenPropUpdate(propsToValue, nextProps => {
      if (propsToValue(nextProps)) {
        nextProps.history.replace(path);
      }
    }),
    /**
     * Don't rendering anything if value is truthy.
     */
    branch(propsToValue, renderNothing)
  );
