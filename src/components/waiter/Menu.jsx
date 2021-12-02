import React from "react";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({ menuProducts, type, onAddproduct }) => {
  
  return (
    <div className="menu">
      <h2>{type}</h2>
      <ul>
        {menuProducts.map((product) => (
          <li key={product.id}>
            <p onClick={() => onAddproduct(product.id)}>{product.item}</p>
            <p>$ {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
