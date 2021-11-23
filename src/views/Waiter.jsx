import React, { useState } from "react";
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
  const itemsOrder = [
    {id:"1", item: "hamburguesa", price: 3, quantity: 2, categories: ["lunch"]},
    {id:"2", item: "agua", price: 5, quantity: 1, categories: ["lunch"]}
  ]

  //HOOKS
  //1 cambiar el estado del resumen del pedido
  const [addedProducts, setSummaryProducts] = useState(itemsOrder)

  //calcular el monto total del pedido
  const totalAmount = addedProducts.reduce((a, b) => {
    return a + b.price * b.quantity
  }, 0)


  //FUNCIONES
  
  //1.1 Funciones para modificar cantidades en resumen de pedido
  const handleDecrease = (id) => {
    const newSummary = addedProducts.map((item) => {
      if(item.id === id){
        /* if(item.quantity > 1){
          return {...item, quantity: item.quantity - 1}
        } */
        return { ...item, quantity: Math.max(item.quantity - 1 ,1)}
      } else {
        return item
      }
      
    })
    setSummaryProducts(newSummary)
  }

  const handleIncrease = (id) => {
    const newSummary = addedProducts.map((item) => {
      if(item.id === id){
        return {...item, quantity: item.quantity + 1}
      } else {
        return item
      }
    })
    setSummaryProducts(newSummary)
  }

  const handleDelete = (id) => {
    const newSummary = addedProducts.filter((item) => {
      return item.id !== id
    })
    setSummaryProducts(newSummary)
  }

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
            category="breakfast"
            summaryProducts={filterProducts(addedProducts, "breakfast")}
            onDecrease={(id) => handleDecrease(id)}
            onIncrease={(id) => handleIncrease(id)}
            onDelete={(id) => handleDelete(id)}
            total={ totalAmount }   
            itemsOrder={ itemsOrder }
            cancelButton= { (itemsOrder) => setSummaryProducts(itemsOrder) }
          />
        </Route>
        <Route path={`${path}/burgers-menu`}>
          <TakingOrders 
            title={"Menú resto del día"}
            menuProducts={filterProducts(products, "lunch")}
            category="lunch"
            summaryProducts={filterProducts(addedProducts, "lunch")}
            onDecrease={(id) => handleDecrease(id)}
            onIncrease={(id) => handleIncrease(id)}
            onDelete={(id) => handleDelete(id)}
            total={ totalAmount }
            itemsOrder={ itemsOrder }
            cancelButton= { (itemsOrder) => setSummaryProducts(itemsOrder) }
          />
        </Route>
      </Switch>
    </div>
  );
};
