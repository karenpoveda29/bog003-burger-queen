import React from "react";
import "../../styles/menuTitle.css";

export const MenuTitle = ({ 
  title, 
  clientTable, 
  clientName,
  onObtainClientTable,
  onObtainClientName
}) => {

    return (
    <div className="menuTitleDiv">
       <h1 className="menu-Title">{ title }</h1>
      
      <select className="user-table" id="userTable" name="table" value = {clientTable} onChange={(e)=>onObtainClientTable(e.target.value)}>
        <option value="-1" disabled>Mesa</option>
        <option value="1">Mesa 1</option>
        <option value="2">Mesa 2</option>
        <option value="3">Mesa 3</option>
        <option value="4">Mesa 4</option>
        <option value="5">Mesa 5</option>
        <option value="6">Mesa 6</option>
      </select>

      <label className="customer" htmlFor="inputName">
        Cliente:
      </label>
      <input
        type="text"
        id="inputNameClient"
        placeholder="Nombre y apellido"
        required
        name="name"
        value={clientName}
        onChange = {(e)=>onObtainClientName(e.target.value)}
      ></input>
      
    </div>
  );
};
