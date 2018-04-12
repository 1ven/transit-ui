import React from "react";
import { Route, Switch } from "react-router-dom";
import * as paths from "core/application/paths";
import SignIn from "./SignIn";

export default () => (
  <Switch>
    <Route exact path={paths.user.signIn} component={SignIn} />
  </Switch>
);
