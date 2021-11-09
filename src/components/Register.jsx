import React from "react"
import { Link } from "react-router-dom"
import {fbConfig} from "../fb"
import './Auth.css'


export const Register = (props) => {
 
    
    const submitHandler = (e) => {
        e.preventDefault();
        const user = e.target.userType.value
        const name = e.target.inputName.value
        const email = e.target.inputEmail.value;
        const password = e.target.inputPassword.value;
    
        console.log(user,name,email,password);

        fbConfig
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((userFb)=>{
            console.log('Ya puedes iniciar sesión con', userFb.user.email)
        })
    }

    return (
        <div className="Login">
            <img className="Register-img" src={"./images/logo-image.png"} alt="Burger Queen" />
            <h1>Registro</h1>
            <form className="form" onSubmit = {submitHandler}>
            <select id= "userType">
                <option value="Mesero">Mesero</option>
                <option value="Jefe_cocina">Jefe de cocina</option>
            </select>
            <input type="text" id="inputName" placeholder="name"></input>
            <input type="email" id="inputEmail" placeholder="email"></input>
            <input type="password" id="inputPassword" placeholder="password"></input>
            <button>Registrarse</button>
            </form>
            <Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>

        </div>
    )
}