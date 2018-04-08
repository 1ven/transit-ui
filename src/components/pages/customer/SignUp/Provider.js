import yup from "yup";
import { compose, withProps } from "recompose";
import { yupValidate } from "core/libraries/final-form";
import { unauthenticated } from "core/application/hoc";
import View from "./View";

export default compose(
  unauthenticated,
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
