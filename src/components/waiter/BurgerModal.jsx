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
      <div>
      <h3>Personaliza tu hamburguesa</h3>
      
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
            <button value={selectedAddons} onClick={() => onObtainSelectedAddons({addOnName: option.item, addOnPrice: option.price})}>
            {`${option.item} $${option.price}`}
            </button>
          </div>
        )}
      <button onClick={onClose}>X</button>
      <button onClick={()=>{onAddProduct(productId); onClose();} }>Agregar</button>
      </div>
    </div>
  );
}

