import React, { useState } from "react";

export default function BurgerModal({ options, onClose, onAddOptions }) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleObtainSelectedAddons = (addons)=>{
    setSelectedAddons([...selectedAddons, {addons}])
  }

  return (
    <div>
      <h3>Escoger tus opciones</h3>

      {options
        .filter((option) => option.unique)
        .map((option) => (
          <div  key={option.id}>
            <input 
              type="radio"
              name={option.category}
              id={`${option.category}-${option.item}`}
              value={selectedOption}
              onChange={()=>setSelectedOption(option.id)}
             
            />
            <label htmlFor={`${option.category}-${option.item}`}>{option.item}</label>
          </div>
        ))
      }
      {options 
        .filter((option) => !option.unique)
        .map((option) => (
        <div  key={option.id}>
          <input
            type="checkbox"
            name={option.item}
            id={option.item}
            value={selectedAddons}
            onClick={()=>handleObtainSelectedAddons(option.id)}
          />
          <label htmlFor={option.item}>{option.item}</label>
        </div>
      ))
      }
      <button>X</button>
      <button>Agregar</button>
    </div>
  );
}
