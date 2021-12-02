import React from "react";
import "../../styles/resumeOrder.css";
import deleteIcon from "../../images/delete.png";

export const OrderSummary = ({ summaryProducts, menuProducts, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="resume-order">
      <h2 className="resume-title">Resumen del pedido</h2>
      <ul>
        {summaryProducts.map(summaryProduct => {
          const menuProduct = menuProducts.find(menuProduct => menuProduct.id === summaryProduct.id)
          return (
            <li key={summaryProduct.id}>
              <p>{menuProduct.item}</p>
              <p>$ {menuProduct.price}</p>
              <button className="less-btn" onClick={() => onDecrease(summaryProduct.id)}>-</button>
              <span>{summaryProduct.quantity}</span>
              <button  className="plus-btn" onClick={() => onIncrease(summaryProduct.id)}>+</button>
              <img id="deleteBtn" src={deleteIcon} alt="Borrar" onClick={() => onDelete(summaryProduct.id)}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
