import React from "react";
import data from '../data/menu.json';
import '../styles/menuBreakfast.css'


//  const breakfast = data.filter((item)=> item.type === "desayuno")
//const breakfast = data[0].desayuno.productos.filter((item)=> item.item)
const breakfast = data[0].desayuno.productos
const nameBreakfast = breakfast.map((item)=> `producto: ${item.item} precio: ${item.precio} ` )
console.log(nameBreakfast)

export const MenuBreakfast = () => {
    return (
        <div className="menu-breakfast">
          <label> <input type="checkbox" />Café americano $5</label><br/>
          <label> <input type="checkbox" />Café con leche $7</label><br/>
          <label> <input type="checkbox" />Sandwich de jamón y queso $10</label><br/>
          <label> <input type="checkbox" />Jugo de frutas natural $7</label><br/>
          {/* <div className="line"> */}
          {/* <hr /> */}
          {/* </div>           */}

        </div>
    )
}