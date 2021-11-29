import React  from "react";
import '../../styles/home.css';
import homeImage from "../../images/Logo.png"

export const Home = () =>{

  return (
    <main className= "home-section">
      <img className= "logo-home" src={homeImage} alt="Burger Queen" />
    </main>
  )
};