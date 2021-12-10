import React, { useState } from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { Menu } from "../../components/waiter/Menu";
import { OrderSummary } from "../../components/waiter/OrderSummary";
import { TotalOrder } from "../../components/waiter/TotalOrder";
import { OrdersButtons } from "../../components/waiter/OrdersButtons";
import { BurgerModal } from "../../components/waiter/BurgerModal";

export const TakingOrders = ({ title, menuProducts }) => {
  const [clientTable, setClientTable] = useState("-1");
  const [clientName, setClientName] = useState("");
  const [summaryProducts, setSummaryProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  //el id del producto que abrió la modal 
  const [id, setId] = useState("");
  //guardar los id de las opciones seleccionadas modal
  const [selectedOption, setSelectedOption] = useState("");
  console.log("selectedOption:", selectedOption);
  const [selectedAddons, setSelectedAddons] = useState([]);
  console.log("selectedAddons:", selectedAddons);

   

  //Obtener los tipos de productos para el renderizado del menú
  const menuTypes = [...new Set(menuProducts.map((product) => product.type))];

  const handleCancelOrder = () => {
    setClientTable("-1");
    setClientName("");
    setSummaryProducts([]);
  };

  //Calcular el total de la orden
  const prices = summaryProducts.map(({ id, quantity }) => {
    const menuProduct = menuProducts.find((product) => product.id === id);
    return menuProduct.price * quantity;
  });
  const total = prices.reduce((acumulador, price) => acumulador + price, 0);

  //FUNCIONES
  const handleObtainClientTable = (table) => {
    setClientTable(table);
  };
  const handleObtainClientName = (clientName) => {
    setClientName(clientName);
  };

  const handleAddProductToSummary = (id) => {
    if (summaryProducts.filter((product) => product.id === id).length === 0) {
      setSummaryProducts([...summaryProducts, { id, quantity: 1 }]);
    }
  };

  //FUNCIONES MODAL OPCIONES
  const handleShowModal = (id) => {
    setId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    //Funciones para tomar y guardar las opciones y adiciones
  const handleObtainSelectedOption = (id) => {
    setSelectedOption(id);
  };

  const handleObtainSelectedAddons = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedAddons([...selectedAddons, id]);
    } else {
      setSelectedAddons(selectedAddons.filter((addOn) => addOn !== id));
    }
  };
  /* const handleAddOptions = () => {
    
  } */


  //Funciones para modificar cantidades en resumen de pedido
  const handleDecrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        /* if(item.quantity > 1){
          return {...item, quantity: item.quantity - 1}
        } */
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      } else {
        return item;
      }
    });
    setSummaryProducts(newSummary);
  };

  const handleIncrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setSummaryProducts(newSummary);
  };

  const handleDelete = (id) => {
    const newSummary = summaryProducts.filter((item) => {
      return item.id !== id;
    });
    setSummaryProducts(newSummary);
  };

  return (
    <main className="order-block">
      <MenuTitle
        title={title}
        onObtainClientTable={handleObtainClientTable}
        onObtainClientName={handleObtainClientName}
        clientTable={clientTable}
        clientName={clientName}
      />

      {menuTypes.map((type) => (
        <Menu
          key={type}
          menuProducts={menuProducts.filter((product) => product.type === type)}
          type={type}
          summaryProducts={summaryProducts}
          onAddproduct={handleAddProductToSummary}
        />
      ))}
      {showModal && (
        <BurgerModal
          menuProducts={menuProducts}
          id={id}
          onCloseModal={handleCloseModal}
          onObtainSelectedOption={handleObtainSelectedOption}
          onObtainSelectedAddons={handleObtainSelectedAddons}
        />
      )}
      <OrderSummary
        summaryProducts={summaryProducts}
        menuProducts={menuProducts}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        onDelete={handleDelete}
        onShowModal={handleShowModal}
      />
      <TotalOrder total={total} />
      <OrdersButtons
        clientTable={clientTable}
        clientName={clientName}
        summaryProducts={summaryProducts}
        menuProducts={menuProducts}
        total={total}
        onCancelOrder={handleCancelOrder}
      />
    </main>
  );
};
