import React from "react"
import { MenuTitle } from "../../components/waiter/MenuTitle"
import { Menu } from "../../components/waiter/Menu"
import { ResumeOrder } from "../../components/waiter/ResumeOrder"

export const Breakfast = ({ filteredProducts }) => {
    return (
        <div>
            <MenuTitle title = {"Menú desayuno"}/>
            <Menu filteredProducts={ filteredProducts }/>
            <ResumeOrder />
        </div>
    )
}
