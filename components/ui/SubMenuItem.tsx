"use client";
import React, { useState } from "react";
import Icon from "./icons/Icon";
import { IconTypes, SubMenuType } from "@/types/types";
import Link from "next/link";

function SubMenuItem({ menu, id, subItens }: SubMenuType) {
  return (
    <div id={id} className="submenu-anim ">
      <ul className="flex gap-x-8 title2">
        {subItens.map((item, index) => (
          <li key={index}>{<Link href={item.link}>{item.label}</Link>}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubMenuItem;
