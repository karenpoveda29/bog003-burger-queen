import React from "react";
import '../styles/homeView.css'
import { Home } from "../components/Home"
import { NavBarChef } from "../components/NavBarChef";

export const HomeChef = () => {
    return (
        <div className= "home-view">
            <NavBarChef />
            <Home />
        </div>
    )
};