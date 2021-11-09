import React from "react"
import { Link } from "react-router-dom"


export const Login = ()=> {
    return (
        <div>
            <img src={"./images/logo.png"} alt="Burger Queen" />
            <h1>Inicia sesión</h1>

            <input type="email" class="input-email" placeholder="email"></input>
            <input type="password" class="input-password" placeholder="password"></input>
            <button>Ingresar</button>
            <Link to="/register">Registrarse</Link>

        </div>
    )
}