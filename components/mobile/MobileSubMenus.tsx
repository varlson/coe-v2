"use client";
import React, { useState } from "react";
import Icon from "../ui/icons/Icon";
import {
  defaultSubMenus,
  IconTypes,
  MobileMenuPropsType,
  SubMenuItemsType,
  SubMenuType,
} from "@/types/types";
import { menus } from "@/constants/lan/pt";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";

type MobileSubMenusProps = SubMenuType & MobileMenuPropsType;

function MobileSubMenus({
  menu,
  id,
  subItens,
  isOpen,
  setIsOpen,
}: MobileSubMenusProps) {
  const [subMenus, setSubMenus] = useState<SubMenuItemsType>(defaultSubMenus);
  const menuId = subMenus[id as keyof SubMenuItemsType];

  const linkClickHandle = () => {
    setIsOpen();
  };

  const expandHandle = async (id: keyof SubMenuItemsType) => {
    await setSubMenus({ ...defaultSubMenus, [id]: !subMenus[id] });
    const content = document.getElementById(id) as HTMLElement;
    if (!subMenus[id]) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  };

  return (
    <div className="px-5  py-2 ">
      <div className="  cursor-pointer w-full">
        <div
          onClick={() => expandHandle(id as keyof SubMenuItemsType)}
          className="w-full flex justify-center items-center gap-x-1 p-2 bg-red800 rounded"
        >
          <p className="title1">{menu}</p>
          <Icon
            styles={`h-5 w-6 ${
              menuId ? "expand-collapse-in" : "expand-collapse-out"
            }`}
            iconType={IconTypes.DefaultIcon}
            src={menuId ? "collapse" : "expand"}
          />
        </div>
        <ul className="mob-items transition-all duration-300" id={id}>
          {subItens.map((subItem, index) => (
            <li className="border-b px-1 title3 my-2" key={index}>
              <Link onClick={linkClickHandle} href={subItem.link}>
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileSubMenus;
