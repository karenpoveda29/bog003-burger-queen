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

  //array que recibe los items  que se van seleccionando
  // const itemsOrder = [
  //   {id:"1", item: "hamburguesa", price: 3, quantity: 2, categories: ["lunch"]},
  //   {id:"2", item: "agua", price: 5, quantity: 1, categories: ["lunch"]}
  // ]


  //HOOKS
  /*  //1 tomar datos del pedido
   const [customer, setCustomer] = useState({
    table:'',
    clientName:'',
    itemsOrder:[]
   }) */

  //2 cambiar el estado del resumen del pedido

  //calcular el monto total del pedido
  



  //FUNCIONES
  
  
  //1.1 Funciones para modificar cantidades en resumen de pedido

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
