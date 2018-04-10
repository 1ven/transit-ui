import yup from "yup";
import { compose, withProps } from "recompose";
import { yupValidate } from "core/libraries/final-form";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import { withAsyncValidation } from "core/libraries/final-form";
import { consumerToHoc } from "core/libraries/react/hoc";
import { withPromise, unauthenticated } from "core/application/hoc";
import { signUp } from "model/user/api";
import * as userState from "components/state/User/context";
import View from "./View";

export default compose(
  unauthenticated,
  consumerToHoc(userState.Consumer, "user"),
  withPromise(signUp, "signUp", props =>
    compose(
      withAsyncValidation,
      withSuccess(profile => {
        props.user.successSignUp(profile);
      })
    )
  ),
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
