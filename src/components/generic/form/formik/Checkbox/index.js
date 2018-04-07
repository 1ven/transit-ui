import React from "react";
import { Field } from "formik";
import { Checkbox } from "../../native";

export default props => (
  <Field
    name={props.name}
    render={({ field }) => (
      <Checkbox {...field} {...props} checked={field.value} />
    )}
  />
);
