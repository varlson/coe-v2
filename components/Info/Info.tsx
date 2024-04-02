import React, { ReactNode } from "react";
import Icon from "../ui/icons/Icon";
import { IconTypes } from "@/types/types";
import { colegiate_info } from "@/constants/lan/pt";
import Link from "next/link";

function Info({
  title,
  children,
  logo,
}: {
  logo?: string;
  title: string;
  children: ReactNode;
}) {
  const { members } = colegiate_info;
  return (
    <div className="w-9/12 bg-white py-2 px-4  m-auto mt-1">
      <fieldset className=" border border-dashed border-separate border-red900">
        <legend className=" px-4 mx-6 rounded">
          <div className="flex gap-x-4 info-title rounded">
            <Icon
              src={logo ? logo : "colegiate"}
              styles="h-7 w-7"
              iconType={IconTypes.DefaultIcon}
            />
            <p className="title1 ">{title}</p>
          </div>
        </legend>
        <div className="body-info ">{children}</div>
      </fieldset>
    </div>
  );
}

export default Info;
