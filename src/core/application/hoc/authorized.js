import { compose } from "recompose";
import { withGuard } from "core/libraries/react/hoc";
import paths from "core/application/paths";
import authenticated from "./authenticated";

export default cond =>
  compose(
    authenticated
    // fetch user data
    // withGuard(props => cond(props.user.profile), paths[role].main)
  );
