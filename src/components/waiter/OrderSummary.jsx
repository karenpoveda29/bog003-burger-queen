import React from "react";
import "../../styles/resumeOrder.css";
import deleteIcon from "../../images/delete.png";

export const OrderSummary = ({ summaryProducts, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="resume-order">
      <h2 className="resume-title">Resumen del pedido</h2>
      <ul>
        {summaryProducts.map((product) => (
          <li key={product.id}>
            <p>{product.item}</p>
            <button onClick={() => onDecrease(product.id)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => onIncrease(product.id)}>+</button>
            <img src={deleteIcon} alt="Borrar" onClick={() => onDelete(product.id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
