import { compose, renderNothing, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";

export default path =>
  compose(
    withRouter,
    lifecycle({
      componentDidMount() {
        this.props.history.replace(
          typeof path === "function" ? path(this.props) : path
        );
      }
    }),
    renderNothing
  );
