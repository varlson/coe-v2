import React, { useState } from "react";
import SubMenu from "../subMenun/SubMenu";
import MobileSubMenus from "./MobileSubMenus";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CgLoadbar } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Icon from "../ui/icons/Icon";
import { IconTypes } from "@/types/types";
import { menus } from "@/constants/lan/pt";

function MobileManu({
  mobMenu,
  menuClickHandle,
}: {
  mobMenu?: boolean;
  menuClickHandle?: () => void;
}) {
  const [home, setHome] = useState(false);

  const expandHandle = (id: string) => {
    setHome(!home);

    const content = document.getElementById(id) as HTMLElement;
    if (!home) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  };
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 h-screens z-10 ">
      <div className="absolute bg-black opacity-90 inset-0 z-20"></div>
      <div className="relative  text-white z-20 flex h-screen p-2 flex-col items-end">
        <div className="text-3xl text-red800">
          <IoMdCloseCircleOutline />
        </div>

        <div
          onClick={() => expandHandle("home")}
          className="cursor-pointer self-start"
        >
          <div className="flex justify-center items-center gap-x-1 p-2 bg-red800 min-w-20 rounded">
            <p className="title1">{menus[0].menu}</p>
            <Icon
              styles={`h-5 w-6 ${
                home ? "expand-collapse-in" : "expand-collapse-out"
              }`}
              iconType={IconTypes.DefaultIcon}
              src={home ? "collapse" : "expand"}
            />
          </div>
          <ul className="mob-items transition-all duration-300" id="home">
            {menus[0].subItens.map((subItem, index) => (
              <li className="px-1 title3 my-1" key={index}>
                {subItem.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileManu;
