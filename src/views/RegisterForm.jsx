import React, { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/register.css'
import { registerUser } from "../firebaseFunctions"
import logoImage from "../images/logo-image.png"


export const RegisterForm = () => {

	//Mostrar mensaje de registro exitoso
	const [ showMessageOk, setShowMessageOk ] = useState( false )  

	const submitForm = (e) => {
		e.preventDefault();
		/* const userType = e.target.userType.value */
		const userName = e.target.inputName.value
		const email = e.target.inputEmail.value;
		const password = e.target.inputPassword.value;

		registerUser(userName, email, password).then(() => {
			setShowMessageOk(true)
			setTimeout(() => window.location.pathname = "/login", 2000);
		}).catch(() => {
			
		})
			
	}

	return (
		<div className="container-register">
			<img className="register-img" src={logoImage} alt="Burger Queen" />
			<h1 className="form-title">Formulario de registro</h1>
			<form className="form-reg" onSubmit = { submitForm }>
				<label htmlFor="userType">
					<span className="require">*</span>
					Selecciona tu perfil
				</label>
				<select className="user-type" id= "userType">
						<option value="Mesero">Mesero</option>
						<option value="JefeCocina">Jefe de cocina</option>
				</select>

				<label htmlFor="inputName">
					<span className="require">*</span>
					Nombre y apellido
				</label>
				<input type="text" id="inputName" placeholder="Pancho Villa" required></input>

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

				{/* Montrar el elemento p cuando cambie el estado */}
				{ showMessageOk === true && <p className="registerOk">¡Registro Exitoso!</p> }


				<button className="btn-register">Registrarse</button>
			</form>
			<Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
		</div>
	)
};