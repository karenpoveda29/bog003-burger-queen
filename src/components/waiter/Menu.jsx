import React from "react";
import "../../styles/menu.css";
import { v4 as uuidv4 } from 'uuid';


//Este componente crea los items del menú

export const Menu = ({ menuProducts, type, customer, setCustomer}) => { //array de objetos con los items de uno de los menús: lunch o breakfast

  // console.log('menu productos',menuProducts);
  const handlerChange = (e)=>{
    if (e.target.checked === true){
      const newCustomer = {...customer}
      const newItem = {id:uuidv4(), item: e.target.value, price: 0, quantity: 1, categories: []}
      
      menuProducts.forEach(product => {
       if(product.item === e.target.value){
          newItem.price = product.price
          newItem.categories = product.categories
       }
      });
      
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

