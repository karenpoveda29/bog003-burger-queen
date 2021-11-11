import React, { useState } from "react"
import { Link } from "react-router-dom"
import { registerUser } from "../firebaseFunctions"
import '../styles/login-register.css'


export const RegisterForm = () => {

    const [ showMessageOk, setShowMessageOk ] = useState( false )  


    const submitForm = (e) => {
        e.preventDefault();
        /* const userType = e.target.userType.value */
        const userName = e.target.inputName.value
        const email = e.target.inputEmail.value;
        const password = e.target.inputPassword.value;
    
        registerUser(userName, email, password)
        setShowMessageOk(true)
        setTimeout(() => window.location.pathname = "/login", 2000);
        
    }

    return (
        <div className="Login">
            <img className="Register-img" src={"./images/logo-image.png"} alt="Burger Queen" />
            <h1>Registro</h1>
            <form className="form" onSubmit = { submitForm }>
            <select id= "userType">
                <option value="Mesero">Mesero</option>
                <option value="Jefe_cocina">Jefe de cocina</option>
            </select>
            <input type="text" id="inputName" placeholder="name"></input>
            <input type="email" id="inputEmail" placeholder="email"></input>
            <input type="password" id="inputPassword" placeholder="password"></input>
            { showMessageOk === true && <p className="registerOk">¡Registro Exitoso!</p> }
            <button>Registrarse</button>
            </form>
            <Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>

        </div>
    )
}