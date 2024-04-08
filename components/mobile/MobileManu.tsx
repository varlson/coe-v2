"use client";
import React, { useEffect } from "react";
import MobileSubMenus from "./MobileSubMenus";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { menus } from "@/constants/lan/pt";
import { MobileMenuPropsType } from "@/types/types";
import { useContextApp } from "@/context/Context";
import { menusES } from "@/constants/lan/es";
import { menusEN } from "@/constants/lan/en";

type MobileManuProps = {
  mobMenu?: boolean;
  menuClickHandle?: () => void;
  menu: string;
};

function MobileManu({ isOpen, setIsOpen }: MobileMenuPropsType) {
  const { menuLan } = useContextApp();

  const closeHandle = () => {
    setIsOpen();
  };

  return (
    <div
      id="mob-menu-wrap"
      className={`fixed top-0 left-0 bottom-0 right-0 h-screens z-10 ${
        isOpen ? "mob-submenu-anim" : ""
      }`}
    >
      <div className="absolute bg-black opacity-90 inset-0 z-20"></div>
      <div className="relative  text-white z-20 flex h-screen p-2 flex-col items-end">
        <div
          onClick={closeHandle}
          className="cursor-pointer text-3xl text-red800"
        >
          <IoMdCloseCircleOutline />
        </div>

        <div className=" w-full flex  flex-col">
          {menuLan.map((one_menu, index) => (
            <div key={index}>
              <MobileSubMenus
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                menu={one_menu.menu}
                id={one_menu.id}
                subItens={one_menu.subItens}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileManu;
