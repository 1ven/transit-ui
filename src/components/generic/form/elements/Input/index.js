import React from "react";

export default ({ input, type }) => (
  <input
    className="input-reset ba br2 ph2 pv3 db w-100 f5 b--black-20 outline-0"
    type={type}
    {...input}
  />
);
