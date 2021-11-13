import React from "react";
import '../styles/profileSelection.css'

export const ProfileSelection = () => {

    const goToHomeWaiter = () => {
        window.location.pathname = "/home-waiter"
    }

    const goToHomeChef = () => {
        window.location.pathname = "/home-chef"
    }

    return (
        <div className="container-prof-select">
          {/* <img className="Login-letters" src={"./images/BQ.png"} alt="Burger Queen" /> */}
          <h1 className="profile-selection-title">Selecciona tu perfil</h1>
          <div className="profile-choices">
            <div className="waiter">
                <img onClick = { goToHomeWaiter } className="waiter-img" src={"./images/waiter.png"} alt="Mesero" />
                <p className="waiter-text">Mesero</p>
            </div>
            <div className="chef">
                <img onClick = { goToHomeChef } className="chef-img" src={"./images/cocina.png"} alt="Cocina" />
                <p className="chef-text">Cocina</p>
            </div>
          </div>
               
        </div>
    )
}