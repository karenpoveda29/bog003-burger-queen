import React from "react";

export default function BurgerModal({ 
  options, 
  onClose, 
  selectedOption, 
  selectedAddons, 
  onObtainSelectedOptions, 
  onObtainSelectedAddons ,
  onAddProduct,
  productId
 }) {

 
  return (
    <div>
      <h3>soy una ventana modal</h3>

      {options.filter((option) => option.unique)
        .map((option) =>
          <div key={option.id}>
            <button value={selectedOption} onClick={() => onObtainSelectedOptions(option.item)}>
              {option.item}
            </button>
          </div>
        )}
      {options.filter((option) => !option.unique)
        .map((option) =>
          <div key={option.id}>
            <button value={selectedAddons} onClick={() => onObtainSelectedAddons(option.item)}>
              {option.item}
            </button>
          </div>
        )}
      {/* {options
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
      } */}
      <button onClick={onClose}>X</button>
      <button onClick={()=>{onAddProduct(productId); onClose();} }>Agregar</button>
    </div>
  );
}

// onClick={()=>onAddProduct(options.id)}
