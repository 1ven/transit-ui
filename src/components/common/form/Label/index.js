import React from "react";

export default ({ title, children }) => (
  <div>
    <div className="f6 fw6 mb1">{title}</div>
    {children}
  </div>
);
