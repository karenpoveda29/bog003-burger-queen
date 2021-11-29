import React from "react";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({ menuProducts, type, customer, setCustomer}) => { //array de objetos con los items de uno de los menús: lunch o breakfast

  const handlerChange = (e)=>{
    if (e.target.checked === true){
      
      const newCustomer = {...customer}
      const newItem = {item: e.target.value, price: 10}
      newCustomer.itemsOrder.push(newItem)
      setCustomer(newCustomer)

    } else {
      const newCustomer = {...customer}
      newCustomer.itemsOrder = customer.itemsOrder.filter((product)=> product.item !== e.target.value)
      setCustomer(newCustomer)
    }
  }

  return (
    <div className="menu">
      <h2>{ type }</h2>
      <ul>
        {menuProducts.filter(product => product.type === type).map( product => (
          <li key={ product.id }>
            <input type="checkbox" value = { product.item } onChange={handlerChange}/>
            <p>{product.item} </p>
            <p>$ {product.price}</p>
          </li>
        ))}        
      </ul>
    </div>
  );
};

