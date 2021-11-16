import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/waiter-chef.css";
import { NavBarWaiter } from "../components/waiter/NavBarWaiter";
import { Home } from "./sub-views/Home";
import { BreakfastMenu } from "./sub-views/BreakfastMenu";
import { BurgersMenu } from "./sub-views/BurgersMenu";

export const Waiter = () => {
  return (
    <div className="home-view">
      <Router>
        <NavBarWaiter />
      

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/breakfast-menu">
            <BreakfastMenu />
          </Route>
          <Route path="/burgers-menu">
            <BurgersMenu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
