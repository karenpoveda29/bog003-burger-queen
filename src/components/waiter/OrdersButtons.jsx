import React from 'react'
import { createOrder } from "../../firebaseFunctions";

export function OrdersButtons( {customer, summaryProducts} ) {

  const handleSendKitchen = (customerInfo) =>{

    createOrder(customerInfo.table, customerInfo.clientName, summaryProducts)
  }

  return (
    <div className= "btn-waiter">
      <button className="btn-cancel" >Cancelar pedido</button>
      <button className="btn-sendKitchen" onClick={() =>handleSendKitchen(customer)} >Enviar a cocina</button>
    </div>
  )
}
// cancelButton, itemsOrder, 
// onClick={() => cancelButton(itemsOrder)}
 
