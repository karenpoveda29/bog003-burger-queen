import React from "react"
import '../styles/login.css'
import { Link } from "react-router-dom"
import { loginUser } from "../firebaseFunctions"
import logo from "../images/Logo.png"



export const Login = (props)=> {
    
	const loginSession = (e) => {
		e.preventDefault();
		const email = e.target.inputEmail.value;
		const password = e.target.inputPassword.value;
	
		loginUser(email, password)
		window.location.pathname = "/profile-selection";
			
	}

	return (
			<div className="container-login">
				<img className= "login-img" src={logo} alt="Burger Queen" />
				<h1 className="form-title">Inicia sesión</h1>
				<form className= "form-login" onSubmit = { loginSession }>
					<label htmlFor="inputEmail">
						<span className="require">*</span>
						Correo electrónico
					</label>
					<input type="email" id="inputEmail" placeholder="panchito@gmail.com" required></input>

					<label htmlFor="inputPassword">
						<span className="require">*</span>
						Contraseña
					</label>
					<input type="password" id="inputPassword" placeholder="Ingresa tu contraseña" required></input>
					
					<button className="btn-login">Ingresar</button>
					
				</form>
				<Link to="/register">Registrarse</Link>

			</div>
	)
};