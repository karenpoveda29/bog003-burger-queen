import React, { useState } from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { Menu } from "../../components/waiter/Menu";
import { OrderSummary } from "../../components/waiter/OrderSummary";
import { TotalOrder } from "../../components/waiter/TotalOrder";
import { OrdersButtons } from "../../components/waiter/OrdersButtons";
/* import { BurgerModal } from '../../components/waiter/BurgerModal' */

export const TakingOrders = ({ title, menuProducts }) => {
  const [customer, setCustomer] = useState({
    table: "",
    clientName: "",
  });

  //cambiar el estado del resumen del pedido
  const [summaryProducts, setSummaryProducts] = useState([]);

  const menuTypes = [...new Set(menuProducts.map((product) => product.type))];

  //FUNCIONES
  const handleAddProductToSummary = (id) => {
    if(summaryProducts.filter(product => product.id === id).length === 0){
      setSummaryProducts([...summaryProducts, { id, quantity: 1 }]);
    }
  };

  //Funciones para modificar cantidades en resumen de pedido
  const handleDecrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        /* if(item.quantity > 1){
          return {...item, quantity: item.quantity - 1}
        } */
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      } else {
        return item;
      }
    });
    setSummaryProducts(newSummary);
  };

  const handleIncrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setSummaryProducts(newSummary);
  };

  const handleDelete = (id) => {
    const newSummary = summaryProducts.filter((item) => {
      return item.id !== id;
    });
    setSummaryProducts(newSummary);
  };

  return (
    <main className="order-block">
      <MenuTitle title={title} customer={customer} setCustomer={setCustomer} />

      {menuTypes.map((type) => (
        <Menu
          menuProducts={menuProducts.filter((product) => product.type === type)}
          type={type}
          summaryProducts={summaryProducts}
          onAddproduct={handleAddProductToSummary}
        />
      ))}

      <OrderSummary
        summaryProducts={summaryProducts}
        menuProducts={menuProducts}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        onDelete={handleDelete}
      />
      <TotalOrder
        summaryProducts={summaryProducts}
        menuProducts={menuProducts}
      />
      <OrdersButtons customer={customer} summaryProducts={summaryProducts} />
    </main>
  );
};
