import React  from "react";
import '../styles/home.css'

export const Home = (props) =>{

  return (
    <div className= "home-section">
      {/* <h1>{props.title}</h1> */}
      <img className= "logo-home" src={"./images/logo.png"} alt="Burger Queen" />
    </div>
  )
};