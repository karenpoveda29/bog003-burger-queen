import React from "react";
import "../../styles/menu.css";
import { v4 as uuidv4 } from 'uuid';


//Este componente crea los items del menú

export const Menu = ({ menuProducts, type, summaryProducts, setSummaryProducts}) => { //array de objetos con los items de uno de los menús: lunch o breakfast

  const handlerChange = (e)=>{
    if (e.target.checked === true){
      const newSummary = [...summaryProducts]
      const newItem = {id:uuidv4(), item: e.target.value, price: 0, quantity: 1, categories: []}
      
      menuProducts.forEach(product => {
       if(product.item === e.target.value){
          newItem.price = product.price
          newItem.categories = product.categories
       }
      });
      
      newSummary.push(newItem)
      setSummaryProducts(newSummary)

    } else {
      const newSummary = [...summaryProducts]
      newSummary.filter((product)=> product.item !== e.target.value)
      setSummaryProducts(newSummary)
    }
    console.log('summaryProducts- menu', summaryProducts);
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

