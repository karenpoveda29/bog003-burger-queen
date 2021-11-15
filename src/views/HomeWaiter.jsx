import React from "react";
import '../styles/homeView.css'
//import { Home } from "../components/Home"
import { NavBarWaiter } from "../components/NavBarWaiter";
import {MenuTitle} from "../components/MenuTitle";
import {MenuBreakfast} from "../components/MenuBreakfast"
import {ResumeOrder} from "../components/ResumeOrder"

export const HomeWaiter = () => {
    return (
        <div className= "home-view">
            <NavBarWaiter />
            {/* <Home /> */}
            <div className= "menuTitleDiv">
            <MenuTitle />
            <MenuBreakfast />
            <ResumeOrder />
            </div>
        </div>
    )
}