import React from "react";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({ filteredProducts }) => {

  return (
    <div className="menu">
      <ul>
        {filteredProducts.map( product => (
          <li key={ product.id }>
            <input type="checkbox" />
            <span>{product.item}</span>
            <span>$ {product.price}</span>
          </li>
        ))}        
      </ul>
    </div>
  );
};
