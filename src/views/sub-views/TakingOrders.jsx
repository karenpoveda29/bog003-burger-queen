import React, { useState } from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { Menu } from "../../components/waiter/Menu";
import { OrderSummary } from "../../components/waiter/OrderSummary";
import { TotalOrder } from "../../components/waiter/TotalOrder";
import { OrdersButtons } from "../../components/waiter/OrdersButtons";
//import { BurgerModal } from "../../components/waiter/BurgerModal";

export const TakingOrders = ({ title, menuProducts }) => {

  const [clientTable, setClientTable] = useState("-1")
  const [clientName, setClientName] = useState("")
  const [summaryProducts, setSummaryProducts] = useState([])

  const menuTypes = [...new Set(menuProducts.map((product) => product.type))];

  const handleObtainClientTable = (table) => {
    setClientTable(table)
  }

  const handleObtainClientName = (clientName) => {
    setClientName(clientName)
  }

  const handleAddProductToSummary = (id) => {
    if (summaryProducts.filter(product => product.id === id).length === 0) {
      setSummaryProducts([...summaryProducts, { id, quantity: 1 }])
    }
  }

  const handleDecrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        /* if(item.quantity > 1){
          return {...item, quantity: item.quantity - 1}
        } */
        return { ...item, quantity: Math.max(item.quantity - 1, 1) }
      } else {
        return item
      }

    })
    setSummaryProducts(newSummary)
  }

  const handleIncrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    setSummaryProducts(newSummary)
  }

  const handleDelete = (id) => {
    const newSummary = summaryProducts.filter((item) => {
      return item.id !== id
    })
    setSummaryProducts(newSummary)
  }

  return (
    <main className="order-block">
      <MenuTitle 
       title={title}
       clientTable={clientTable}
       clientName={clientName}
       onObtainClientTable={handleObtainClientTable} 
       onObtainClientName={handleObtainClientName} />
      {/* {showModalWindow === true && (
        <BurgerModal
          sethamburgerType={sethamburgerType}
          setShowModalWindow={setShowModalWindow}
        />
      )} */}

      {menuTypes.map((type) => (
        <Menu
          key={type}
          products={menuProducts.filter((product) => product.type === type)}
          summaryProducts={summaryProducts}
          onAddProduct={handleAddProductToSummary}
          type={type}
        />
      ))}

      <OrderSummary
        summaryProducts={summaryProducts}
        menuProducts={menuProducts}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        onDelete={handleDelete}
      />
      <TotalOrder menuProducts={menuProducts} summaryProducts={summaryProducts} />
      <OrdersButtons summaryProducts={summaryProducts} />
    </main>
  );
};
