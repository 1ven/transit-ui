import { compose, withProps, withHandlers } from "recompose";
import View from "./View";

export default compose(
  withProps({
    initialValues: {
      email: "",
      password: ""
    }
  }),
  withHandlers({
    onSubmit: () => values => {
      console.log(values);
    }
  })
)(View);
