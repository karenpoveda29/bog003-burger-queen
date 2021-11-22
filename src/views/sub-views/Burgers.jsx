import React from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { Menu } from "../../components/waiter/Menu";
import { ResumeOrder } from "../../components/waiter/ResumeOrder";

export const Burgers = ({ filteredProducts }) => {
  return (
    <div>
      <MenuTitle title = {"Menú resto del día"}/>
      <Menu filteredProducts={ filteredProducts }/>
      <ResumeOrder />
    </div>
  );
};
