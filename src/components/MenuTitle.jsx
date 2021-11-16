import React from "react";
import '../styles/menuTitle.css'

export const MenuTitle = () => {
    return (
        <div className="menuTitle">
        <h1>Menú desayuno</h1>
        <select className="user-table" id= "userTable">
						<option value="1">Mesa</option>
                        <option value="1">Mesa 1</option>
						<option value="2">Mesa 2</option>
                        <option value="1">Mesa 3</option>
						<option value="2">Mesa 4</option>
                        <option value="1">Mesa 5</option>
						<option value="2">Mesa 6</option>
				</select>

        <label className="customer" htmlFor="inputName">
					Cliente:
				</label>
				<input type="text" id="inputNameClient" placeholder="Nombre y apellido" required></input>
        

        </div>    
    )
}