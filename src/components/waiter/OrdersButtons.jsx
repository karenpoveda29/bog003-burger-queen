import React from 'react'
import { createOrder } from "../../firebaseFunctions";

export function OrdersButtons( {cancelButton, itemsOrder, customer} ) {

  const handleSendKitchen = (customerInfo) =>{

    createOrder(customerInfo.table, customerInfo.clientName)
  }

  return (
    <div className= "btn-waiter">
      <button className="btn-cancel" onClick={() => cancelButton(itemsOrder)}>Cancelar pedido</button>
      <button className="btn-sendKitchen" onClick={() =>handleSendKitchen(customer)} >Enviar a cocina</button>
    </div>
  )
}

 
