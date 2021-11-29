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
      onIncrease, onDecrease, onDelete,
      total,
      customer,
      setCustomer

    }) => {

    return (
      <main className="order-block">
        <MenuTitle title = { title } customer={ customer } setCustomer = { setCustomer } />
        {category === "breakfast" 
          ? 
            <div>
                <Menu menuProducts={ menuProducts } customer={ customer } setCustomer = { setCustomer } type="Bebidas"/>
                <Menu menuProducts={ menuProducts } customer={ customer } setCustomer = { setCustomer } type="Sandwiches"/>
            </div>
          : 
            <div>
                <Menu menuProducts={ menuProducts } customer={ customer } setCustomer = { setCustomer } type="Bebidas"/>
                <Menu menuProducts={ menuProducts } customer={ customer } setCustomer = { setCustomer } type="Hamburguesas"/>
                <Menu menuProducts={ menuProducts } customer={ customer } setCustomer = { setCustomer } type="Acompañamientos"/>
            </div> 
        }
        <OrderSummary 
          summaryProducts = { summaryProducts } 
          onDecrease={ onDecrease } 
          onIncrease={ onIncrease } 
          onDelete={ onDelete } 
        />
        { summaryProducts.length >=  1 
        ? 
          <TotalOrder total={ total }/> 
        : 
          <TotalOrder total={ 0 }/>
        }
        <OrdersButtons customer={ customer }/>
      </main>
    );
};
