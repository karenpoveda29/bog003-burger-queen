import React from "react";
import { Home } from "../components/Home"
import { NavBarWaiter } from "../components/NavBarWaiter";

export const HomeWaiter = () => {
    return (
        <div>
            <NavBarWaiter />
            <Home />
        </div>
    )
}