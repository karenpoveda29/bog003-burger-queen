import React from "react";

export const ProfileSelection = () => {

    const goToHomeWaiter = () => {
        window.location.pathname = "/home-waiter"
    }

    const goToHomeChef = () => {
        window.location.pathname = "/home-chef"
    }

    return (
        <div>
             <img className="Login-img" src={"./images/logo.png"} alt="Burger Queen" />
             <h1>Selecciona tu perfil</h1>
             <div>
                 <img onClick = { goToHomeWaiter } className="waiter" src={"./images/waiter.png"} alt="Mesero" />
                 <p>Mesero</p>
             </div>
             <div>
                <img onClick = { goToHomeChef } className="chef" src={"./images/cocina.png"} alt="Cocina" />
                <p>Cocina</p>
             </div>  
        </div>
    )
}