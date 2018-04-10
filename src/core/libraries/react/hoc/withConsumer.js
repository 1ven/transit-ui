import React from "react";

export default (Consumer, key) => Component => props => (
  <Consumer>{value => <Component {...{ ...props, [key]: value }} />}</Consumer>
);
