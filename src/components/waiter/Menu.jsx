import React from "react";
import "../../styles/menu.css";
import { v4 as uuidv4 } from 'uuid';


//Este componente crea los items del menú

export const Menu = ({ menuProducts, type, summaryProducts, setSummaryProducts, hamburgerType, setShowModalWindow}) => { //array de objetos con los items de uno de los menús: lunch o breakfast

  const handlerSelectProduct = (e)=>{
    const item = summaryProducts.find(product => product.item === e.target.innerText)
    if(!item){
      
      const newSummary = [...summaryProducts]
      const newItem = {id:uuidv4(), item: `${e.target.innerText} ${hamburgerType}`, price: 0, quantity: 1, categories: []}
      
      menuProducts.forEach(product => {
        if(product.item === e.target.innerText){
          newItem.price = product.price
          newItem.categories = product.categories
        }
      });
      
      if(e.target.innerText.includes("Hamburguesa")){
        setShowModalWindow(true)
        newSummary.push(newItem)
        setSummaryProducts(newSummary)
        console.log(newItem)
      }else{
        newSummary.push(newItem)
        setSummaryProducts(newSummary)
      }

      
    }
  };

  return (
    <div className="menu">
      <h2>{ type }</h2>
      <ul>
        {menuProducts.filter(product => product.type === type).map( product => (
          <li key={ product.id }>
            
            {/* <input type="checkbox" value = { product.item } onChange={handlerChange}/> */}
            <p onClick={handlerSelectProduct}>{product.item}</p>
            <p>$ {product.price}</p>
            
          </li>
        ))}        
      </ul>
    </div>
  );
};

