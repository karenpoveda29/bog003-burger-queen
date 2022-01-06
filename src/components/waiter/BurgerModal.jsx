import React from "react";
import "../../styles/burgerModal.css"


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
    <div className= "background-options-modal">
      <div className= "options-modal">
      <button className= "close-modal" onClick={onClose}>x</button>
      <h3 className= "title-modal">Personaliza tu hamburguesa</h3>
      
      <h4 className= "choose-option">Escoge el tipo:</h4>
      <div className= "options-addons">      
      {options.filter((option) => option.unique)
        .map((option) =>
          <div key={option.id}>
            <button className= "btn-options" value={selectedOption} onClick={() => onObtainSelectedOptions(option.item)}>
              {option.item}
            </button>
          </div>
        )}
      </div>

      <h4 className= "choose-option">Escoge las adiciones:</h4>
      <div className= "options-addons">
      {options.filter((option) => !option.unique)
        .map((option) =>
          <div key={option.id}>
            <button className= "btn-addons" value={selectedAddons} onClick={() => onObtainSelectedAddons({addOnName: option.item, addOnPrice: option.price})}>
            {`${option.item} $${option.price}`}
            </button>
          </div>
        )}
      </div>
      <button className= "btn-add-burger" onClick={()=>{onAddProduct(productId); onClose();} }>Agregar</button>
      </div>
    </div>
  );
}

