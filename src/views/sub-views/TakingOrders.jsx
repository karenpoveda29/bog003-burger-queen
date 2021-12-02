import React, { useState } from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { Menu } from "../../components/waiter/Menu";
import { OrderSummary } from "../../components/waiter/OrderSummary";
import { TotalOrder } from "../../components/waiter/TotalOrder";
import { OrdersButtons } from "../../components/waiter/OrdersButtons";
/* import { BurgerModal } from '../../components/waiter/BurgerModal' */

export const TakingOrders = ({
  title,
  menuProducts,
  summaryProducts,
  onIncrease,
  onDecrease,
  onDelete,
  total,
}) => {
  const [customer, setCustomer] = useState({
    table: "",
    clientName: "",
  });

  const menuTypes = [...new Set(menuProducts.map((product) => product.type))];

  return (
    <main className="order-block">
      <MenuTitle title={title} customer={customer} setCustomer={setCustomer} />

      {menuTypes.map((type) => (
        <Menu
          menuProducts={menuProducts.filter((product) => product.type === type)}
          type={type}
          summaryProducts={summaryProducts}
        />
      ))}

      <OrderSummary
        summaryProducts={summaryProducts}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        onDelete={onDelete}
      />
      {summaryProducts.length >= 1 ? (
        <TotalOrder total={total} />
      ) : (
        <TotalOrder total={0} />
      )}
      <OrdersButtons customer={customer} summaryProducts={summaryProducts} />
    </main>
  );
};
