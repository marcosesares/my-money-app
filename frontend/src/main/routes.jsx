import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";
import Dashboard from "./../dasboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import Home from "./home";

const Routes = (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);

export default Routes;
