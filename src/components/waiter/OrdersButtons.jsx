import React from 'react'

export function OrdersButtons( {cancelButton, itemsOrder} ) {
  return (
    <div className= "btn-waiter">
      <button className="btn-cancel" onClick={() => cancelButton(itemsOrder)}>Cancelar pedido</button>
      <button className="btn-sendKitchen" type="submit">Enviar a cocina</button>
    </div>
  )
}

 
