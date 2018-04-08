import yup from "yup";
import { compose, withProps } from "recompose";
import { yupValidate, withAsyncValidation } from "core/libraries/final-form";
import { withPromise, unauthenticated } from "core/application/hoc";
import { signUp } from "model/customer/api";
import View from "./View";

export default compose(
  unauthenticated,
  withPromise(signUp, "signUp", () => withAsyncValidation),
  withProps({
    validate: yupValidate(
      yup.object().shape({
        email: yup
          .string()
          .email("Email format is incorrect")
          .required("This field is required"),
        password: yup.string().required("This field is required"),
        confirmation: yup
          .string()
          .oneOf([yup.ref("password")], "Passwords are not matching")
          .required("This field is required")
      })
    )
  })
)(View);
