import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/waiter-chef.css";
import { Home } from "./sub-views/Home";
import { NavBarChef } from "../components/chef/NavBarChef";
import { PendingCooking } from "./sub-views/PendingCooking";

export const Chef = () => {
  let { path } = useRouteMatch();

  return (
    <div className="home-view">
      <NavBarChef />

      <Switch>
        <Route exact path={path}>
          <Home />
        </Route>
        <Route path={`${path}/pending-cooking`}>
          <PendingCooking />
        </Route>
      </Switch>
    </div>
  );
};
