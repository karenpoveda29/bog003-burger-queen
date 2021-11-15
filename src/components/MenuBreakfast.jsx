import React from "react";
//const data = require("../data/menu.json");
import '../styles/menuBreakfast.css'

export const MenuBreakfast = () => {
    return (
        <div className="menu-breakfast">
          <label> <input type="checkbox" />Café americano $5</label><br/>
          <label> <input type="checkbox" />Café con leche $7</label><br/>
          <label> <input type="checkbox" />Sandwich de jamón y queso $10</label><br/>
          <label> <input type="checkbox" />Jugo de frutas natural $7</label><br/>
          <div className="line">
          <hr />
          </div>
          

        </div>
    )
}