import React from "react"
import { MenuTitle } from "../../components/waiter/MenuTitle"
import { Menu } from "../../components/waiter/Menu"
import { OrderSummary } from "../../components/waiter/OrderSummary"
import { TotalOrder } from "../../components/waiter/TotalOrder"
import { OrdersButtons } from "../../components/waiter/OrdersButtons"

export const TakingOrders = 
    ({ title, 
      menuProducts, 
      category, 
      summaryProducts,
      onIncrease, onDecrease, onDelete
    }) => {

    return (
        <div>
        <MenuTitle title = { title }/>
        {category === "breakfast" ? 
            <div>
                <Menu menuProducts={ menuProducts } type="Bebidas"/>
                <Menu menuProducts={ menuProducts } type="Sandwiches"/>
            </div>
            : 
            <div>
                <Menu menuProducts={ menuProducts } type="Bebidas"/>
                <Menu menuProducts={ menuProducts } type="Hamburguesas"/>
                <Menu menuProducts={ menuProducts } type="Acompañamientos"/>
            </div> 
        }
        <OrderSummary 
          summaryProducts = { summaryProducts } 
          onDecrease={ onDecrease } 
          onIncrease={ onIncrease } 
          onDelete={ onDelete } 
        />
        <TotalOrder />
        <OrdersButtons />
        </div>
    );
};
