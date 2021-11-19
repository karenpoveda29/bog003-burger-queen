import React from "react";
import {  Switch, Route, useRouteMatch } from "react-router-dom";
import "../styles/waiter-chef.css";
import { NavBarWaiter } from "../components/waiter/NavBarWaiter";
import { Home } from "./sub-views/Home";
import { BreakfastMenu } from "./sub-views/BreakfastMenu";
import { BurgersMenu } from "./sub-views/BurgersMenu";

export const Waiter = () => {
  let { path } = useRouteMatch();

  return (
    
      <div className="home-view">
        <NavBarWaiter />

        <Switch>      
          <Route exact path={path}>
            <Home />
          </Route>
          <Route path={`${path}/breakfast-menu`}>
            <BreakfastMenu />
          </Route>
          <Route path={`${path}/burgers-menu`}>
            <BurgersMenu />
          </Route>

        </Switch>
      </div>
    
  );
};
