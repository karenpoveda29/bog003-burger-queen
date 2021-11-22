import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/waiter-chef.css";

//componentes
import { NavBarWaiter } from "../components/waiter/NavBarWaiter";
import { Home } from "./sub-views/Home";
import { Breakfast } from "./sub-views/Breakfast";
import { Burgers } from "./sub-views/Burgers";

//Data del json
import data from "../data/menu.json"

export const Waiter = () => {
  let { path } = useRouteMatch();

  const { products } = data;

  return (
    
      <div className="home-view">
        <NavBarWaiter />

        <Switch>
          <Route exact path={path}>
            <Home />
          </Route>
          <Route path={`${path}/breakfast-menu`}>
            <Breakfast filteredProducts={products.filter(product => product.categories.includes("breakfast"))}/>
          </Route>
          <Route path={`${path}/burgers-menu`}>
            <Burgers filteredProducts={products.filter(product => product.categories.includes("lunch"))}/>
          </Route>
        </Switch>

    </div>
  );
};
