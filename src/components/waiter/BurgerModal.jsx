import React, { useState } from "react";

export function BurgerModal({ menuProducts, id, onCloseModal/* , onAddOptions  */ }) {

  const [selectedOption, setSelectedOption] = useState("");
  console.log('selectedOption:', selectedOption)
  const [selectedAddons, setSelectedAddons] = useState([]);
  console.log('selectedAddons:', selectedAddons)
  

  const handleObtainSelectedAddons = (e, id)=>{
    const isChecked = e.target.checked;
    if(isChecked){  
      setSelectedAddons([...selectedAddons, id])
    }else{
      setSelectedAddons(selectedAddons.filter(addOn => addOn !== id))
    }
  }
  const selectedProduct = menuProducts.find(product => product.id === id)
  const options = selectedProduct.options
  return (
    <div>
      <h3>Escoge tus opciones</h3>
      { options
        .filter( option => option.unique)
        .map(option => (
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
        .filter(option => !option.unique)
        .map(option => (
        <div  key={option.id}>
          <input
            type="checkbox"
            name={option.category}
            id={option.item}
            value={selectedAddons}
            onChange={(e)=>handleObtainSelectedAddons(e, option.id)}
          />
          <label htmlFor={option.item}>{option.item}</label>
        </div>
      ))
      }
      <button onClick={onCloseModal}>X</button>
      <button /* onAddOptions={onAddOptions} */>Agregar</button>
    </div>
  );
}
