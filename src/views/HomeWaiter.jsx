import React from "react";
import '../styles/homeView.css'
import { Home } from "../components/Home"
import { NavBarWaiter } from "../components/NavBarWaiter";

export const HomeWaiter = () => {
    return (
        <div className= "home-view">
            <NavBarWaiter />
            <Home />
        </div>
    )
}