import React from "react";
import { Field } from "formik";
import { Input } from "../../native";

export default props => (
  <Field
    name={props.name}
    render={({ field }) => {
      return <Input {...field} {...props} />;
    }}
  />
);
