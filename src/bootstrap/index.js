import "isomorphic-fetch";

import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import State from "components/state";
import * as stylesheet from "./stylesheet";
import { routes, history } from "./routes";

export default () => {
  stylesheet.init();

  ReactDOM.render(
    <Router history={history}>
      <State>{routes}</State>
    </Router>,
    document.getElementById("root")
  );
};
