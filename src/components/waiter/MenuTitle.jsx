import React, {useState} from "react";
import "../../styles/menuTitle.css";

export const MenuTitle = ({ title }) => {

  const customerData = {
    table:'',
    name:''
  }
  const [customer, setCostumer] = useState({customerData})

  const handleData =(e)=>{

      //  const {name, value} = e.target
      //  console.log(name, value);

    //const customerData = {table: e.target.tagName === '', name: e.target.value}
    console.log(e.target);
    //setCostumer(customerData)
    // console.log(newCustomer);
    //console.log(setCostumerData(newCustomer));
    
    // e.preventDefault();
    // console.log(e.target.value);
  }
  console.log(customer)

  return (
    <div className="menuTitle">
       <h1>{ title }</h1>
      
      <select className="user-table" id="userTable" name="table" onChange = {handleData}>
        <option value="mesa">Mesa</option>
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
        onChange = {handleData}
      ></input>
      
    </div>
  );
};
