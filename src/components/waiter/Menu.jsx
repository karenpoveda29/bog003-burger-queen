import React, {useState} from "react";

import BurgerModal from "./BurgerModal";
import "../../styles/menu.css";

//Este componente crea los items del menú

export const Menu = ({
  products,
  type,
  summaryProducts,
  onAddProduct,
  hamburgerType,
  setShowModalWindow,
}) => {
  const [ showModalId, setShowModalId ] = useState(null);
  //array de objetos con los items de uno de los menús: lunch o breakfast

  //FUNCIONES
  // const handleObtainOption = (clientName) => {
  //   setClientName(clientName);
  // };



  return (
    <div className="menu">
      <h2>{type}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.options !== undefined && showModalId === product.id && (
              <BurgerModal
                options={product.options}
                onClose={() => {}}
                onAddOptions={() => {}}
              />
            )}
            <button
              onClick={() => { product.options ? setShowModalId(product.id) : onAddProduct(product.id) }}
              style={{ width: "300px" }}
            >
              <img
                src={product.image}
                alt={product.item}
                style={{ width: "100%" }}
              />
              {/* <input type="checkbox" value = { product.item } onChange={handlerChange}/> */}
              <p>{product.item}</p>
              <p>$ {product.price}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
