import { compose } from "recompose";
import { authenticated } from "components/state/User/hoc";
import View from "./View";

export default compose(authenticated)(View);
