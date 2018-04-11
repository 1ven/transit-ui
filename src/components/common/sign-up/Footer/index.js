import React from "react";
import { Button } from "components/generic/kit";

export default ({
  isSubmitting,
  backLink,
  form: { pristine, submitFailed, invalid }
}) => (
  <div className="flex items-center mt3">
    <Button
      color={pristine ? "gray" : submitFailed && invalid ? "red" : "green"}
    >
      {isSubmitting ? "Please, wait..." : "Create account"}
    </Button>
    <i
      style={{
        visibility: submitFailed && invalid ? "visible" : "hidden"
      }}
      className="material-icons ml2 red"
    >
      error_outline
    </i>
    {React.cloneElement(backLink, {
      className: "ml-auto black f6"
    })}
  </div>
);
