import React from "react";
import "../../styles/menuBreakfast.css";
import data from "../../data/menu.json";


export const MenuBreakfast = () => {
  const breakfast = data.desayuno.productos;

  return (
    <div className="menu-breakfast">
      {breakfast.map((item) => (
        <div key={item.id}>
          <label>
            <input type="checkbox" />
            {item.item}
          </label>
          <p>{item.precio}</p>
        </div>
      ))}
    </div>
  );
};
