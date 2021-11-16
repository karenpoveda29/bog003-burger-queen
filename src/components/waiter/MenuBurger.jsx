import React from "react";

import data from "../../data/menu.json";

export const MenuBurger = () => {
  const createItems = (item) => {
    return (
      <div key={item.id}>
        <label>
          <input type="checkbox" />
          {item.item}
        </label>
        <p>{item.precio}</p>
      </div>
    );
  };
  const burgers = data["resto del día"].hamburguesas.map((item) => {
    return createItems(item);
  });
  const sides = data["resto del día"].acompañamientos.map((item) => {
    return createItems(item);
  });

  const drinks = data["resto del día"].bebidas.map((item) => {
    return createItems(item);
  });

  return (
    <div className="lunch-container">
      <div>
        <h2>HAMBURGUESAS</h2>
        {burgers}
      </div>
      <div>
        <h2>ACOMPAÑAMIENTOS</h2>
        {sides}
      </div>
      <div>
        <h2>BEBIDAS</h2>
        {drinks}
      </div>
    </div>
  );
};
