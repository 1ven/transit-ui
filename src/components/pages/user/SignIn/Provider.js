import { compose } from "recompose";
import { unauthenticated } from "core/application/hoc";
import View from "./View";

export default compose(unauthenticated)(View);
