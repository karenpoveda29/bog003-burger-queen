import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navBar.css'
import { logOutUser } from "../../firebaseFunctions"
import logoIcon from "../../images/BQ.png"
import menu1Icon from "../../images/menu1.png"
import menu2Icon from "../../images/menu2.png"
import notificationIcon from "../../images/notifications.png"
import perfilIcon from "../../images/perfil.png"
import logoutIcon from "../../images/logout.png"


export const NavBarWaiter = () => {

  const logOut = () => {
    logOutUser()
    window.location.pathname = "/login";
  }

  return (
    <nav className="navBar">
      {/* <img className="arrowClose" src={"./images/flecha-cerrar.png"} alt="Flecha Cerrar Menu" /> */}
      <img className="logo-text" src={logoIcon} alt="Burger Queen" />
      <h2>Menús</h2>
      <div>
        <Link to="/waiter/breakfast-menu"><img className="menu-breakfast" src={menu1Icon} alt="Menu desayuno" /> </Link>
        {/* <p>Desayuno</p> */}
      </div>
      <div>
        <Link to="/waiter/burgers-menu"><img className="menu-lunch" src={menu2Icon} alt="Menu Resto del Dia" /> </Link>
        {/* <p>Resto del Dia</p> */}
      </div>
      <hr />
      {/* <h2>Pedidos pendientes</h2> */}
      <div className="notification">
        <img className="notification-icon" src={notificationIcon} alt="Notificación" />
        <p className="notification-number">3</p>
      </div>
      <div className="user-section">
        <img className="user-icon" src={perfilIcon} alt="logo perfil" />
        <p className="user-name">Alejandra Perez</p>
      </div>
      <div>
        <img 
          onClick = { logOut }
          className="logout" src={logoutIcon} alt="cerrar sesión" />
      </div>
    </nav>
  );
};
