import React from "react";
import "../../styles/orderSummary.css";
import deleteIcon from "../../images/delete.png";

export const OrderSummary = ({ summaryProducts, menuProducts, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="resume-order">
      <h2 className="resume-title">Resumen del pedido</h2>
      <ul>
        {summaryProducts.map((product, index) => {
          const menuProduct = menuProducts.find(menuProduct => menuProduct.id === product.id);
          return (
            <li key={index}>
              <p className="product-name">{`${menuProduct.item} ${product.protein}`} {product.addOns.map((addOn)=>addOn.addOnName).join(" ")}</p>
              <p className="product-price">
              ${menuProduct.price + product.addOns.reduce((acumulador, addOn)=>acumulador + addOn.addOnPrice ,0)}
              </p>
              <div className="quantity-btns">
                <button className="less-btn" onClick={() => onDecrease(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button  className="plus-btn" onClick={() => onIncrease(product.id)}>+</button>
              </div>
              <img className="deleteBtn" src={deleteIcon} alt="Borrar" onClick={() => onDelete(product.id)}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
};