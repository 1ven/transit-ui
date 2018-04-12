import React from "react";
import { Route, Switch } from "react-router-dom";
import * as paths from "core/application/paths";
import SignUp from "./SignUp";

export default () => (
  <Switch>
    <Route exact path={paths.driver.signUp} component={SignUp} />
  </Switch>
);
