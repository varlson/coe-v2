"use client";
import React, { useState } from "react";
import Icon from "../ui/icons/Icon";
import { defaultSubMenus, IconTypes, SubMenuItemsType } from "@/types/types";
import { menus } from "@/constants/lan/pt";
import Link from "next/link";

function MobileSubMenus() {
  const [subMenus, setSubMenus] = useState<SubMenuItemsType>(defaultSubMenus);
  const expandHandle = (curr: string) => {
    const mob_menu = document.getElementById("mob-menu") as HTMLElement;
    mob_menu.classList.toggle("mob-menu");

    setSubMenus({ ...defaultSubMenus, [curr]: !subMenus[curr] });
  };
  return (
    <div className="px-5 py-2">
      <div>
        <div
          onClick={() => expandHandle("home")}
          className="flex items-center gap-x-1 bg-red-900 min-w-44 justify-center p-2 rounded text-white cursor-pointer"
        >
          <p className="title1">Início</p>
          <Icon
            styles={`h-5 w-6 ${
              subMenus.home ? "expand-collapse-in" : "expand-collapse-out"
            }`}
            src={subMenus.home ? "collapse" : "expand"}
            iconType={IconTypes.DefaultIcon}
          />
        </div>
        <div
          className={`testesss ${
            subMenus.home ? "mob-submenu-in" : "mob-submenu-out"
          }`}
        >
          <ul className="text-white bg-red-500 text-justify px-2 py-1">
            {menus[0].subItens.map((item, index) => (
              <li key={index} className="title2 my-3 border-b">
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileSubMenus;
