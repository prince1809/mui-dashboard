import React from "react";
import {Redirect, Switch} from 'react-router-dom';

import {RouteWithLayout} from "./components";
import {Main as MainLayout} from './layouts';

import {Dashboard as DashboardView} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard"/>
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
    </Switch>
  );
};

export default Routes;
