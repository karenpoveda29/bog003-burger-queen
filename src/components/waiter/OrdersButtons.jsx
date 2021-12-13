import React from "react";
import { createOrder } from "../../firebaseFunctions";

export function OrdersButtons({
  clientName,
  clientTable,
  summaryProducts,
  menuProducts,
  total,
  onCancelOrder
}) {
  const handleSendKitchen = () => {
    const finalOrder = summaryProducts.map(summaryProduct => {
      const menuProduct = menuProducts.find(
        (menuProduct) => menuProduct.id === summaryProduct.id
      );
      return {
        category: menuProduct.categories,
        id: summaryProduct.id,
        item: `${menuProduct.item} ${summaryProduct.protein}, ${summaryProduct.addOns}`, 
        price: menuProduct.price,
        quantity: summaryProduct.quantity,
      };
    });

    createOrder(
      clientTable,
      clientName,
      finalOrder,
      total
    );
  };

  return (
    <div className="btn-waiter">
      <button className="btn-cancel" onClick={onCancelOrder}>Cancelar pedido</button>
      <button
        className="btn-sendKitchen"
        onClick={()=>{handleSendKitchen(); onCancelOrder();}}
      >
        Enviar a cocina
      </button>
    </div>
  );
}