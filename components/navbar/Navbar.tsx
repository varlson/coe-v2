import React from "react";
import LanControl from "../ui/LanControl";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import { IconTypes } from "@/types/types";
import SubMenu from "../subMenun/SubMenu";

function Navbar() {
  return (
    <div className="bg-dblack900 ">
      <div className="flex w-9/12 pb-7 m-auto justify-between">
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
      <div className="w-9/12 m-auto mt-4 rounded bg-red900  text-white">
        <div className="">
          <SubMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
