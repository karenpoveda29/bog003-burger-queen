import React from "react";
import { MenuTitle } from "./MenuTitle"
import { MenuBreakfast } from "./MenuBreakfast"
import { MenuBurger } from "./MenuBurger";
import { ResumeOrder } from "./ResumeOrder"

export const TakeOrders = () => {
    return (
        <div>
            <MenuTitle />
            <MenuBreakfast />
            <MenuBurger />
            <ResumeOrder />
        </div>
    )
}