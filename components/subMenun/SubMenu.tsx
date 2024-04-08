"use client";
import React, { useEffect, useState } from "react";
import SubMenuItem from "../ui/SubMenuItem";
import { defaultSubMenus, IconTypes, SubMenuItemsType } from "@/types/types";
import Icon from "../ui/icons/Icon";
import { useContextApp } from "@/context/Context";
import { menus } from "@/constants/lan/pt";

function SubMenu() {
  const { lanInitializer, menuLan } = useContextApp();
  const [defaultLan, setDefaultLan] = useState(menus);

  const [subMenus, setSubMenus] = useState<SubMenuItemsType>(defaultSubMenus);
  const expandHandle = (curr: keyof SubMenuItemsType) => {
    if (!subMenus[curr]) {
      setSubMenus({ ...defaultSubMenus, [curr]: true });

      setTimeout(() => {
        const menu = document.getElementById(curr) as HTMLDivElement;
        menu.style.maxHeight = menu.scrollHeight + "px";
      }, 10);
    } else {
      setSubMenus(defaultSubMenus);
    }
  };

  useEffect(() => {
    const lanGuageInitializer = async () => {
      await lanInitializer();
      if (menuLan.length) {
        setDefaultLan(menuLan);
      }
    };

    lanGuageInitializer();
  }, [menuLan, lanInitializer]);

  return (
    <div className="flex flex-col ">
      <div className="flex gap-x-4 justify-between">
        <div
          onClick={() => {
            expandHandle("home");
          }}
          className={`  self-start ${
            subMenus.home ? "bg-dred" : ""
          } flex gap-x-2 p-2  items-center cursor-pointer`}
        >
          <p className="title1">COEE</p>
          <Icon
            styles={`h-4 w-5 ${
              subMenus.home ? "expand-collapse-in" : "expand-collapse-out"
            } `}
            src="expand"
            iconType={IconTypes.DefaultIcon}
          />
        </div>

        <div
          onClick={() => {
            expandHandle("course");
          }}
          className={`self-start ${
            subMenus.course ? "bg-dred" : ""
          } flex gap-x-2 p-2  items-center cursor-pointer`}
        >
          <p className="title1">{defaultLan[2].menu}</p>
          <Icon
            styles={`h-4 w-5 ${
              subMenus.course ? "expand-collapse-in" : "expand-collapse-out"
            } `}
            src="expand"
            iconType={IconTypes.DefaultIcon}
          />
        </div>

        <div
          onClick={() => {
            expandHandle("infra");
          }}
          className={`self-start ${
            subMenus.infra ? "bg-dred" : ""
          } flex gap-x-2 p-2  items-center cursor-pointer`}
        >
          <p className="title1">{defaultLan[3].menu}</p>
          <Icon
            styles={`h-4 w-5 ${
              subMenus.infra ? "expand-collapse-in" : "expand-collapse-out"
            } `}
            src="expand"
            iconType={IconTypes.DefaultIcon}
          />
        </div>

        <div
          onClick={() => {
            expandHandle("scholarships");
          }}
          className={`self-start ${
            subMenus.scholarships ? "bg-dred" : ""
          } flex gap-x-2 p-2  items-center cursor-pointer`}
        >
          <p className="title1">{defaultLan[1].menu}</p>
          <Icon
            styles={`h-4 w-5 ${
              subMenus.scholarships
                ? "expand-collapse-in"
                : "expand-collapse-out"
            } `}
            src="expand"
            iconType={IconTypes.DefaultIcon}
          />
        </div>

        <div
          onClick={() => {
            expandHandle("search");
          }}
          className={`self-start ${
            subMenus.search ? "bg-dred" : ""
          } flex gap-x-2 p-2  items-center cursor-pointer`}
        >
          <p className="title1 sub-menu-item">{defaultLan[4].menu}</p>
          <Icon
            styles={`h-4 w-5 ${
              subMenus.search ? "expand-collapse-in" : "expand-collapse-out"
            } `}
            src="expand"
            iconType={IconTypes.DefaultIcon}
          />
        </div>

        <div
          onClick={() => {
            expandHandle("contacts");
          }}
          className={`self-start ${
            subMenus.contacts ? "bg-dred" : ""
          } flex gap-x-2 p-2  items-center cursor-pointer`}
        >
          <p className="title1">{defaultLan[5].menu}</p>
          <Icon
            styles={`h-4 w-5 ${
              subMenus.contacts ? "expand-collapse-in" : "expand-collapse-out"
            } `}
            src="expand"
            iconType={IconTypes.DefaultIcon}
          />
        </div>
      </div>

      <div
        className={`${
          defaultSubMenus != subMenus ? "bg-dred" : "bg-red900"
        } p-2 `}
      >
        {subMenus.home && <SubMenuItem {...menuLan[0]} />}
        {subMenus.scholarships && <SubMenuItem {...menus[1]} />}
        {subMenus.course && <SubMenuItem {...menuLan[2]} />}
        {subMenus.infra && <SubMenuItem {...menuLan[3]} />}
        {subMenus.search && <SubMenuItem {...menuLan[4]} />}
        {subMenus.contacts && <SubMenuItem {...menuLan[5]} />}
      </div>
    </div>
  );
}

export default SubMenu;
