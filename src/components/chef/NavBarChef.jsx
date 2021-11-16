import React from "react";
import '../../styles/navBar.css'
import {logOutUser} from "../../firebaseFunctions"

export const NavBarChef = () => {

  const logOut = () => {
    logOutUser()
    window.location.pathname = "/login";
  }


  return (
    <div className="navBar">
      {/* <img className="arrowClose" src={"./images/flecha-cerrar.png"} alt="Flecha Cerrar Menu" /> */}
      <img className="logo-text" src={"./images/BQ.png"} alt="Burger Queen" />
      {/* <h2 className="pending-order">Pedidos pendientes</h2> */}
      <div className="notification">
        <img className="notification-icon" src={"./images/notifications.png"} alt="Notificación" />
        <p className="notification-number">3</p>
      </div>
      <div className="user-section">
        <img className="user-icon" src={"./images/perfil.png"} alt="logo perfil" />
        <p className="user-name">Alejandra Perez</p>
      </div>
      <div>
        <img 
          onClick = { logOut }
          className="logout" src={"./images/logout.png"} alt="cerrar sesión"
        />
      </div>
    </div>
  );
};
