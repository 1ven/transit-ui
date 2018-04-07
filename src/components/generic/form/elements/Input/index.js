import React from "react";
import styled from "styled-components";
import cx from "classnames";
import { placeholder } from "polished";

export default ({ input, meta: { error, touched }, type, placeholder }) => (
  <div>
    <Input
      className={cx(
        "input-reset ba br2 ph2 pv3 db w-100 f5 b--black-20 outline-0",
        {
          "b--red": touched && error
        }
      )}
      type={type}
      placeholder={placeholder}
      {...input}
    />
    {touched && error && <div className="red mt1 f6">{error}</div>}
  </div>
);

const Input = styled.input`
  ${placeholder({
    fontSize: ".875rem"
  })};
`;
