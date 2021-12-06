import React from "react";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({ menuProducts, type, onAddproduct }) => {
  
  return (
    <div className="menu">
      <h2 className="types-title-menu">{type}</h2>
      <ul>
        {menuProducts.map((product) => (
          <li key={product.id} className="menu-item">
            <button className="menu-item-btn" onClick={() => onAddproduct(product.id)}>
             {/*  <img src={process.env.PUBLIC_URL+product.image} alt={product.iem} /> */}
             {/* <div className="menu-item-text"> */}
              <p className="menu-item-name">{product.item}</p>
              <p>$ {product.price}</p>
             {/* </div> */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
