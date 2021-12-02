import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/waiter-chef.css";

//componentes
import { NavBarWaiter } from "../components/waiter/NavBarWaiter";
import { Home } from "./sub-views/Home";
import { TakingOrders } from "./sub-views/TakingOrders";

//Data del json
import data from "../data/menu.json"

export const Waiter = () => {

  //Función para filtrar arrays: items desayuno o almuerzo  
  const filterProducts = (array, category) => {
    return array.filter(product => product.categories.includes(category))
  }

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
          <TakingOrders
            title={"Menú desayuno"} 
            menuProducts={filterProducts(products, "breakfast")}
          />
        </Route>
        <Route path={`${path}/burgers-menu`}>
          <TakingOrders 
            title={"Menú resto del día"}
            menuProducts={filterProducts(products, "lunch")} 
          />
        </Route>
      </Switch>
    </div>
  );
};
