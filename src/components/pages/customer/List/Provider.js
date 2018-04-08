import { compose } from "recompose";
import { authenticated } from "core/application/hoc";
import View from "./View";

export default compose(authenticated)(View);
