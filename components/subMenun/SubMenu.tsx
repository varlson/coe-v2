"use client";
import React, { useEffect, useState } from "react";
import SubMenuItem from "../ui/SubMenuItem";
import { defaultSubMenus, IconTypes, SubMenuItemsType } from "@/types/types";
import Icon from "../ui/Icon";

function SubMenu() {
  const [subMenus, setSubMenus] = useState<SubMenuItemsType>(defaultSubMenus);
  const [show, setShow] = useState<boolean>(false);

  const anyOpened = (curr: string) => {
    Object.entries(subMenus).forEach(([key, value]) => {
      if (value && key != curr) return true;
    });

    return false;
  };

  const collapse = (curr: string) => {
    const submenu = document.getElementById(curr) as HTMLElement;
    if (submenu) submenu.style.maxHeight = "0px";
  };

  const expand = (curr: string) => {
    const submenu = document.getElementById(curr) as HTMLElement;
    submenu.style.maxHeight = submenu.scrollHeight + "px";
  };

  const teste = async (curr: string) => {
    Object.entries(subMenus).forEach(([key, value]) => {
      if (value == true && key != curr) {
        collapse(key);
        setSubMenus((prev) => ({
          ...prev,
          [key]: false,
        }));
      }
    });
  };

  const expandHandle = async (curr: string) => {
    await teste(curr);
    if (subMenus[curr]) {
      await setSubMenus((prev) => ({
        ...prev,
        [curr]: false,
      }));

      collapse(curr);
    } else {
      await setSubMenus((prev) => ({
        ...prev,
        [curr]: true,
      }));

      expand(curr);
    }
  };

  return (
    <div className="m-0 text-white bg-red950 ">
      <div className="flex justify-around">
        <div
          onClick={() => expandHandle("home")}
          className={` ${
            subMenus.home ? "bg-dred" : ""
          } p-2 gap-x-1 flex  self-start items-center cursor-pointer`}
        >
          <p className="title3">COEE</p>

          <div
            className={
              subMenus.home ? "expand-collapse-out" : "expand-collapse-in"
            }
          >
            <Icon
              src={subMenus.home ? `collapse` : "expand"}
              styles="h-4 w-5"
              iconType={IconTypes.DefaultIcon}
            />
          </div>
        </div>

        <div
          onClick={() => expandHandle("search")}
          className={` ${
            subMenus.search ? "bg-dred" : ""
          } p-2 gap-x-1 flex  self-start items-center cursor-pointer`}
        >
          <p className="title3">Cursos</p>

          <div
            className={
              subMenus.search ? "expand-collapse-out" : "expand-collapse-in"
            }
          >
            <Icon
              src={subMenus.search ? `collapse` : "expand"}
              styles="h-4 w-5"
              iconType={IconTypes.DefaultIcon}
            />
          </div>
        </div>

        <div
          onClick={() => expandHandle("infra")}
          className={` ${
            subMenus.infra ? "bg-dred" : ""
          } p-2 gap-x-1 flex  self-start items-center cursor-pointer`}
        >
          <p className="title3">Infra</p>

          <div
            className={
              subMenus.infra ? "expand-collapse-out" : "expand-collapse-in"
            }
          >
            <Icon
              src={subMenus.infra ? `collapse` : "expand"}
              styles="h-4 w-5"
              iconType={IconTypes.DefaultIcon}
            />
          </div>
        </div>

        <div
          onClick={() => expandHandle("scholarships")}
          className={` ${
            subMenus.scholarships ? "bg-dred" : ""
          } p-2 gap-x-1 flex  self-start items-center cursor-pointer`}
        >
          <p className="title3">Bolsas</p>

          <div
            className={
              subMenus.scholarships
                ? "expand-collapse-out"
                : "expand-collapse-in"
            }
          >
            <Icon
              src={subMenus.scholarships ? `collapse` : "expand"}
              styles="h-4 w-5"
              iconType={IconTypes.DefaultIcon}
            />
          </div>
        </div>
      </div>

      {subMenus.home && <SubMenuItem />}
      {subMenus.search && <SubMenuItem />}
      {subMenus.infra && <SubMenuItem />}
      {subMenus.scholarships && <SubMenuItem />}
    </div>
  );
}

export default SubMenu;
