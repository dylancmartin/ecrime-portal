import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SWDemo from "./pages/SWDemo";
import SWModerator from "./pages/SWModerator";
import CompanyDemo from "./pages/CompanyDemo";
import CompanyPage from "./pages/CompanyPage";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    {/* <AppliedRoute path="/swdemo" exact component={SWDemo} props={childProps} /> */}
    <AppliedRoute
      path="/companydemo"
      exact
      component={CompanyDemo}
      props={childProps}
    />
    <AppliedRoute
      path="/subjectofsearch/:id"
      component={CompanyPage}
      props={childProps}
    />
    {/* <AppliedRoute
      path="/swmoderator"
      exact
      component={SWModerator}
      props={childProps}
    /> */}
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
