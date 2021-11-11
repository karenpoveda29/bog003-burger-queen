import React  from "react";

export const Home = (props) =>{

    return (
        <div>
          <h1>{props.title}</h1>
          <img className= "logo-home" src={"./images/logo.png"} alt="Burger Queen" />
        </div>
    )
}