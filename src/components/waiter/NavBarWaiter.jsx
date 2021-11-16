import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navBar.css'
import { logOutUser } from "../../firebaseFunctions"

export const NavBarWaiter = () => {

  const logOut = () => {
    logOutUser()
    window.location.pathname = "/login";
  }

  return (
    <div className="navBar">
      {/* <img className="arrowClose" src={"./images/flecha-cerrar.png"} alt="Flecha Cerrar Menu" /> */}
      <img className="logo-text" src={"./images/BQ.png"} alt="Burger Queen" />
      <h2>Menús</h2>
      <div>
        <Link to="/breakfast-menu"><img className="menu-breakfast" src={"./images/menu1.png"} alt="Menu desayuno" /> </Link>
        {/* <p>Desayuno</p> */}
      </div>
      <div>
        <Link to="/burgers-menu"><img className="menu-lunch" src={"./images/menu2.png"} alt="Menu Resto del Dia" /> </Link>
        {/* <p>Resto del Dia</p> */}
      </div>
      <hr />
      {/* <h2>Pedidos pendientes</h2> */}
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
          className="logout" src={"./images/logout.png"} alt="cerrar sesión" />
      </div>
    </div>
  );
};
