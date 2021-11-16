import React from "react";
import { MenuTitle } from "../../components/waiter/MenuTitle";
import { MenuBurger } from "../../components/waiter/MenuBurger";
import { ResumeOrder } from "../../components/waiter/ResumeOrder";

export const BurgersMenu = () => {
  return (
    <div>
      <MenuTitle />
      <MenuBurger />
      <ResumeOrder />
    </div>
  );
};
