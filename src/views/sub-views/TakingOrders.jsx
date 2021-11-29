import React, { useState } from "react"
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
      setSummaryProducts,
      onIncrease, onDecrease, onDelete,
      total 
    }) => {

    const [customer, setCustomer] = useState({
      table:'',
      clientName:''
    })

    return (
      <main className="order-block">
        <MenuTitle title = { title } customer={ customer } setCustomer = { setCustomer } />
        {category === "breakfast" 
          ? 
            <div>
                <Menu menuProducts={ menuProducts } summaryProducts={ summaryProducts } setSummaryProducts = { setSummaryProducts } type="Bebidas"/>
                <Menu menuProducts={ menuProducts } summaryProducts={ summaryProducts } setSummaryProducts = { setSummaryProducts } type="Sandwiches"/>
            </div>
          : 
            <div>
                <Menu menuProducts={ menuProducts } summaryProducts={ summaryProducts } setSummaryProducts = { setSummaryProducts } type="Bebidas"/>
                <Menu menuProducts={ menuProducts } summaryProducts={ summaryProducts } setSummaryProducts = { setSummaryProducts } type="Hamburguesas"/>
                <Menu menuProducts={ menuProducts } summaryProducts={ summaryProducts } setSummaryProducts = { setSummaryProducts } type="Acompañamientos"/>
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
        <OrdersButtons customer={ customer } summaryProducts = { summaryProducts }/>
      </main>
    );
};
