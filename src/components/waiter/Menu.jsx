import React, {useState} from "react";

import BurgerModal from "./BurgerModal";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({
  products,
  type,
  onAddProduct,
  selectedOption,
  selectedAddons,
  onObtainSelectedOptions,
  onObtainSelectedAddons

}) => {
  const [ showModalId, setShowModalId ] = useState(null);
  //array de objetos con los items de uno de los menús: lunch o breakfast

  //FUNCIONES
 
  const handleCloseModal = ()=>{
    setShowModalId(null)
  }



  return (
    <div className="menu">
      <h2>{type}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.options !== undefined && showModalId === product.id && (
              <BurgerModal
                options={product.options}
                onClose={handleCloseModal}
                selectedOption={selectedOption}
                selectedAddons={selectedAddons}                
                onObtainSelectedOptions={onObtainSelectedOptions}
                onObtainSelectedAddons={onObtainSelectedAddons}  
                onAddProduct={onAddProduct}    
                productId={product.id}
              />
            )}
            <button
              onClick={() => { product.options ? setShowModalId(product.id) : onAddProduct(product.id) }}
              style={{ width: "300px" }}
            >
              {/*  <img src={process.env.PUBLIC_URL+product.image} alt={product.iem} /> */}
              <p>{product.item}</p>
              <p>$ {product.price}</p>
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
