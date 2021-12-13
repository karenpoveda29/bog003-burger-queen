import React, { useState } from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { Menu } from "../../components/waiter/Menu";
import { OrderSummary } from "../../components/waiter/OrderSummary";
import { TotalOrder } from "../../components/waiter/TotalOrder";
import { OrdersButtons } from "../../components/waiter/OrdersButtons";
//import { BurgerModal } from "../../components/waiter/BurgerModal";

export const TakingOrders = ({ title, menuProducts }) => {

  const [clientTable, setClientTable] = useState("-1")
  const [clientName, setClientName] = useState("")
  const [summaryProducts, setSummaryProducts] = useState([])

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);

  const menuTypes = [...new Set(menuProducts.map((product) => product.type))];

  const prices = summaryProducts.map(({ id, quantity, addOns}) => {
    const menuProduct = menuProducts.find((product) => product.id === id);
    const addonsPrice = addOns.reduce((acumulador, addOn)=>acumulador + addOn.addOnPrice ,0)
    return (menuProduct.price + addonsPrice) * quantity ;
  });
  const total = prices.reduce((acumulador, price) => acumulador + price, 0);

  const handleCancelOrder = () => {
    setClientTable("-1")
    setClientName("")
    setSummaryProducts([])
  }

  const handleObtainClientTable = (table) => {
    setClientTable(table)
  }

  const handleObtainClientName = (clientName) => {
    setClientName(clientName)
  }

  const handleAddProductToSummary = (id) => {
    // if (summaryProducts.filter((product) => product.id === id).length === 0) {}
      setSummaryProducts([...summaryProducts, { id, quantity: 1, protein:selectedOption, addOns: selectedAddons}]);
    
    setSelectedOption("")
    setSelectedAddons([])
  };

  const handleObtainSelectedOptions = (optionName)=>{
     setSelectedOption(optionName)
  }

  const handleObtainSelectedAddons = ({addOnName, addOnPrice})=>{

    if(selectedAddons.filter((addOn)=>addOn.addOnName === addOnName.addOnName).length === 0){
      setSelectedAddons([...selectedAddons, {addOnName, addOnPrice}])
    }else {
      const deleteAddon = selectedAddons.filter((addOn)=>addOn.addOnName !== addOnName.addOnName)
      setSelectedAddons(deleteAddon)
    }
  }

  const handleDecrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        /* if(item.quantity > 1){
          return {...item, quantity: item.quantity - 1}
        } */
        return { ...item, quantity: Math.max(item.quantity - 1, 1) }
      } else {
        return item
      }

    })
    setSummaryProducts(newSummary)
  }

  const handleIncrease = (id) => {
    const newSummary = summaryProducts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    setSummaryProducts(newSummary)
  }

  const handleDelete = (id) => {
    const newSummary = summaryProducts.filter((item) => {
      return item.id !== id
    })
    setSummaryProducts(newSummary)
  }

  return (
    <main className="order-block">
      <MenuTitle
        title={title}
        clientTable={clientTable}
        clientName={clientName}
        onObtainClientTable={handleObtainClientTable}
        onObtainClientName={handleObtainClientName} />

      {menuTypes.map((type) => (
        <Menu
          key={type}
          products={menuProducts.filter((product) => product.type === type)}
          onAddProduct={handleAddProductToSummary}
          type={type}
          selectedOption={selectedOption}
          selectedAddons={selectedAddons}
          onObtainSelectedOptions={handleObtainSelectedOptions}
          onObtainSelectedAddons={handleObtainSelectedAddons}
        />
      ))}

      <OrderSummary
        summaryProducts={summaryProducts}
        menuProducts={menuProducts}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        onDelete={handleDelete}
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
