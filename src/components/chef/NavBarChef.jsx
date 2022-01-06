import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navBar.css'
import {logOutUser} from "../../firebaseFunctions"
import logoIcon from "../../images/BQ.png"
import notificationIcon from "../../images/notifications.png"
import perfilIcon from "../../images/perfil.png"
import logoutIcon from "../../images/logout.png"

export const NavBarChef = () => {

  const logOut = () => {
    logOutUser()
    window.location.pathname = "/login";
  }


  return (
    <nav className="navBar">
      {/* <img className="arrowClose" src={"./images/flecha-cerrar.png"} alt="Flecha Cerrar Menu" /> */}
      <Link to="/chef"> <img className="logo-text" src={logoIcon} alt="Burger Queen" /> </Link>
      {/* <h2 className="pending-order">Pedidos pendientes</h2> */}
      <div className="notification">
      <Link to="/chef/pending-cooking"> <img className="notification-icon" src={notificationIcon} alt="Notificación" /> </Link>
        {/* <p className="notification-number">3</p> */}
      </div>
      <div className="user-section">
        <img className="user-icon" src={perfilIcon} alt="logo perfil" />
        <p className="user-name">Alejandra Perez</p>
      </div>
      <div>
        <img 
          onClick = { logOut }
          className="logout" src={logoutIcon} alt="cerrar sesión"
        />
      </div>
    </nav>
  );
};
