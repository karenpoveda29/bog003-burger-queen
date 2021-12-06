import React from "react";
import "../../styles/resumeOrder.css";
import deleteIcon from "../../images/delete.png";

export const OrderSummary = ({ summaryProducts, menuProducts, onIncrease, onDecrease, onDelete, onShowModal }) => {

  
  return (
    <div className="resume-order">
      <h2 className="resume-title">Resumen del pedido</h2>
      <ul>
        {summaryProducts.map((product) => {
          const menuProduct = menuProducts.find(menuProduct => menuProduct.id === product.id);
          return (
            <li key={product.id}>
              {menuProduct.options !== undefined && <button className="options" onClick={onShowModal} >Escoge tus opciones</button>} 
              <p>{menuProduct.item}</p>
              <p>$ {menuProduct.price}</p>
              <button className="less-btn" onClick={() => onDecrease(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button  className="plus-btn" onClick={() => onIncrease(product.id)}>+</button>
              <img id="deleteBtn" src={deleteIcon} alt="Borrar" onClick={() => onDelete(product.id)}/> 
            </li>
          )
        })}
      </ul>
    </div>
  );
};