import React from 'react'

export function TotalOrder({ menuProducts, summaryProducts }) {
  const prices = summaryProducts.map(({id , quantity}) => {
    const menuProduct = menuProducts.find(product => product.id === id)
    return menuProduct.price * quantity;
  })

  const total = prices.reduce((acumulador, price) => acumulador + price, 0) 
  return (
    <div>
      <h3 className="total">Total: ${total}</h3>
    </div>
  );
};


 
