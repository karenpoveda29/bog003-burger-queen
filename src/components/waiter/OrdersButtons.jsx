import React from "react";
import { createOrder } from "../../firebaseFunctions";

export function OrdersButtons({
  customer,
  summaryProducts,
  menuProducts,
  total,
  onCancelOrder
}) {
  const handleSendKitchen = (customerInfo) => {
    const finalOrder = summaryProducts.map(summaryProduct => {
      const menuProduct = menuProducts.find(
        (menuProduct) => menuProduct.id === summaryProduct.id
      );
      return {
        category: menuProduct.categories,
        id: summaryProduct.id,
        item: menuProduct.item,
        price: menuProduct.price,
        quantity: summaryProduct.quantity,
      };
    });

    createOrder(
      customerInfo.table,
      customerInfo.clientName,
      finalOrder,
      total
    );
  };

  return (
    <div className="btn-waiter">
      <button className="btn-cancel" onClick={onCancelOrder}>Cancelar pedido</button>
      <button
        className="btn-sendKitchen"
        onClick={() => handleSendKitchen(customer)}
      >
        Enviar a cocina
      </button>
    </div>
  );
}

