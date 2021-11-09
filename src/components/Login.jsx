import React from "react"
import { Link } from "react-router-dom"
import {fbConfig} from "../fb"
import './Auth.css'
//import { Register } from "./Register"



export const Login = (props)=> {

        
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.inputEmail.value;
        const password = e.target.inputPassword.value;
    
        console.log(email,password);

        fbConfig.auth().signInWithEmailAndPassword(email,password)
        .then((userFb)=>{
            console.log('Sesión iniciada correctamente', userFb);
           //console.log(props.setUser(userFb))
        })
        
    }
    return (
        <div className="Login">
            <img className= "Login-img" src={"./images/logo.png"} alt="Burger Queen" />
            <h1>Inicia sesión</h1>
            <form className= "form" onSubmit = {submitHandler}>
            <input type="email" id="inputEmail" placeholder="email"></input>
            <input type="password" id="inputPassword" placeholder="password"></input>
            {/*<>{user ? <Home /> : <Register/>}</>*/}
            {/*<Link to = '/home'>*/}
            <button>Ingresar</button>
            {/*</Link>*/}
            </form>
            <Link to="/register">Registrarse</Link>

        </div>
    )
}