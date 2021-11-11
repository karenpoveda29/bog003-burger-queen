import React from "react"
import { Link } from "react-router-dom"
import { loginUser } from "../firebaseFunctions"
import '../styles/login-register.css'



export const Login = (props)=> {
    
	const loginSession = (e) => {
		e.preventDefault();
		const email = e.target.inputEmail.value;
		const password = e.target.inputPassword.value;
	
		loginUser(email, password)
		window.location.pathname = "/profile-selection";
			
	}

	return (
			<div className="Login">
					<img className= "Login-img" src={"./images/logo.png"} alt="Burger Queen" />
					<h1>Inicia sesión</h1>
					<form className= "form" onSubmit = { loginSession }>
					<input type="email" id="inputEmail" placeholder="email"></input>
					<input type="password" id="inputPassword" placeholder="password"></input>
					
					<button>Ingresar</button>
					
					</form>
					<Link to="/register">Registrarse</Link>

			</div>
	)
}