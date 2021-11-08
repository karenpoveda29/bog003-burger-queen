import React from "react"
import { Link } from "react-router-dom"


export default function Register() {
    return (
        <div>
            <img src={"./images/logo-image.png"} alt="Burger Queen" />
            <h1>Registro</h1>
            <select>
                <option value="mesero">Mesero</option>
                <option value="jefe-cocina">Jefe de cocina</option>
            </select>
            <input type="text" class="input-name" placeholder="name"></input>
            <input type="email" class="input-email" placeholder="email"></input>
            <input type="password" class="input-password" placeholder="password"></input>
            <button>Registrarse</button>
            <Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>

        </div>
    )
}