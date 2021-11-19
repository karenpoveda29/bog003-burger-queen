import React from "react";
import '../styles/profileSelection.css'
import waiterImage from "../images/waiter.png"
import kitchenImage from "../images/cocina.png"

export const ProfileSelection = () => {

    const goToHomeWaiter = () => {
        window.location.pathname = "/waiter"
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
                <img onClick = { goToHomeWaiter } className="waiter-img" src={waiterImage} alt="Mesero" />
                <p className="waiter-text">Mesero</p>
            </div>
            <div className="chef">
                <img onClick = { goToHomeChef } className="chef-img" src={kitchenImage} alt="Cocina" />
                <p className="chef-text">Cocina</p>
            </div>
          </div>
               
        </div>
    )
}