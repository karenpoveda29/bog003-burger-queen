import React from "react";
import {logOutUser} from "../firebaseFunctions"

export const NavBarChef = () => {

  const logOut = () => {
    logOutUser()
    window.location.pathname = "/login";
  }


  return (
    <div>
      <img
        className="arrowClose"
        src={"./images/flecha-cerrar.png"}
        alt="Flecha Cerrar Menu"
      />
      <img className="Login-img" src={"./images/logo.png"} alt="Burger Queen" />
      <h2>Pedidos pendientes</h2>
      <div>
        <img
          className="notification"
          src={"./images/notifications.png"}
          alt="Notificación"
        />
        <div> 3 </div>
      </div>
      <div>
        <img
          className="logo-perfil"
          src={"./images/perfil.png"}
          alt="logo perfil"
        />
        <p>Maria Perez</p>
      </div>
      <div>
        <img 
          onClick = { logOut }
          className="logout"
          src={"./images/logout.png"}
          alt="cerrar sesión"
        />
      </div>
    </div>
  );
};
