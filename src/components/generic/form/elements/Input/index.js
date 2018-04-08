import React from "react";
import styled from "styled-components";
import cx from "classnames";
import { placeholder } from "polished";

export default ({
  input,
  meta: { error, submitError, touched, submitFailed },
  type,
  placeholder
}) => {
  // TODO: simplify condition
  const errorMessage = error || submitError;
  // const failed = ((touched && submitFailed) || submitFailed) && !!errorMessage;
  const failed = submitFailed && !!errorMessage;

  return (
    /**
     * Taking into account `submitFailed` prop in order not to display errors when form is not submitted.
     */
    <div>
      <Input
        className={cx(
          "input-reset ba br2 ph2 pv3 db w-100 f5 b--black-20 outline-0",
          {
            "b--red": failed
          }
        )}
        type={type}
        placeholder={placeholder}
        {...input}
      />
      {failed && <div className="red mt1 f6">{errorMessage}</div>}
    </div>
  );
};

const Input = styled.input`
  ${placeholder({
    fontSize: ".875rem"
  })};
`;
