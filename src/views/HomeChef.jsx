import React from "react";
import '../styles/waiter-chef.css'
import { Home } from "./sub-views/Home"
import { NavBarChef } from "../components/chef/NavBarChef";

export const HomeChef = () => {
    return (
        <div className= "home-view">
            <NavBarChef />
            <Home />
        </div>
    )
};