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
            <button onClick={() => onAddproduct(product.id)}>
             {/*  <img src={process.env.PUBLIC_URL+product.image} alt={product.iem} /> */}
              <p>{product.item}</p>
              <p>$ {product.price}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
