import React from "react";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({ menuProducts, type }) => { //array de objetos con los items de uno de los menús: lunch o breakfast

  return (
    <div className="menu">
      <h2>{ type }</h2>
      <ul>
        {menuProducts.filter(product => product.type === type).map( product => (
          <li key={ product.id }>
            <input type="checkbox" />
            <p>{product.item}</p>
            <p>$ {product.price}</p>
          </li>
        ))}        
      </ul>
    </div>
  );
};

