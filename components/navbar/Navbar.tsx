"use client";
import React, { useState } from "react";
import LanControl from "../ui/LanControl";
import Logo from "../ui/Logo";
import Icon from "../ui/icons/Icon";
import { IconTypes } from "@/types/types";
import SubMenu from "../subMenun/SubMenu";
import Hamburger from "../ui/hamburger/hamburger";
import MobileManu from "../mobile/MobileManu";
import { menus } from "@/constants/lan/pt";

function Navbar() {
  const teste = () => {
    const dd = document.getElementById("ttee") as HTMLElement;
    dd.classList.add("mob-submenu-anim");
  };
  const [mobMenu, setMonMenu] = useState(false);
  const menuClickHandle = () => {
    setMonMenu(!mobMenu);
  };
  return (
    <>
      <div className="md:hidden">
        {mobMenu && <MobileManu isOpen={mobMenu} setIsOpen={menuClickHandle} />}
      </div>
      <div className="bg-dblack900 navbar p-2 ">
        <div className="hidden md:flex md:w-9/12 w-11/12 px-4 md:px-0 pb-7 m-auto justify-between pt-2">
          <Logo />
          <div className="flex justify-center items-center">
            <Icon
              iconType={IconTypes.ClickableIcon}
              styles="w-8 h-8"
              src="red-search"
            />
            <LanControl />
          </div>
        </div>

        <div className="px-5 flex justify-between items-center md:hidden">
          <div onClick={menuClickHandle}>
            <Hamburger isOpen={mobMenu} />
          </div>

          <div className="flex">
            <Icon
              iconType={IconTypes.ClickableIcon}
              styles="w-8 h-8"
              src="red-search"
            />
            <LanControl />
          </div>
        </div>

        <div className="md:hidden mt-3">
          <Logo />
        </div>

        <div className="hidden md:flex w-9/12 m-auto mt-4 rounded bg-red900  text-white">
          <div className="">
            <SubMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
