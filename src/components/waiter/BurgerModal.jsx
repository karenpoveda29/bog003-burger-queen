import React, { useState } from "react";

export default function BurgerModal({ options, onClose, onAddOptions }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState(null);

  return (
    <div>
      <h3>soy una ventana modal</h3>

      {options
        .filter((option) => option.unique)
        .map((option) => (
          <div>
            <input
              type="radio"
              name={option.category}
              id={`${option.category}-${option.item}`}
              value={option.id}
            />
            <label htmlFor={`${option.category}-${option.item}`}>{option.item}</label>
          </div>
        ))}


      <button>X</button>
    </div>
  );
}
