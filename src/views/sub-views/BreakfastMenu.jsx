import React from "react"
import { MenuTitle } from "../../components/waiter/MenuTitle"
import { MenuBreakfast } from "../../components/waiter/MenuBreakfast"
import { ResumeOrder } from "../../components/waiter/ResumeOrder"

export const BreakfastMenu = () => {
    return (
        <div>
            <MenuTitle title="Menú desayuno"/>
            <MenuBreakfast />
            <ResumeOrder />
        </div>
    )
}
