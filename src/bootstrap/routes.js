import React from "react";
import { values } from "ramda";
import createBrowserHistory from "history/createBrowserHistory";
import * as pages from "components/pages";

const routes = values(pages).map(React.createElement);

export const history = createBrowserHistory();
export const Routes = () => routes;
