import React from "react";
import { Route, Switch } from "react-router-dom";
import * as paths from "core/application/paths";
import SignUp from "./SignUp";
import List from "./List";
import Onboarding from "./Onboarding";

export default () => (
  <Switch>
    <Route exact path={paths.customer.main} component={List} />
    <Route exact path={paths.customer.signUp} component={SignUp} />
    <Route exact path={paths.customer.onboarding} component={Onboarding} />
  </Switch>
);
