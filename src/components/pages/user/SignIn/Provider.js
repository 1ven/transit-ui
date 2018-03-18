import { compose } from "recompose";
import { unauthenticated } from "components/state/User/hoc";
import View from "./View";

export default compose(unauthenticated)(View);
