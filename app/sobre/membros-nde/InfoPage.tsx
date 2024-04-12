"use client";
import Icon from "@/components/ui/icons/Icon";
import { useContextApp } from "@/context/Context";
import { IconTypes } from "@/types/types";
import Link from "next/link";
import React from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const { members } = Colegiate_Info.Home;

  return (
    <div className="md:w-9/12 bg-white py-2 px-4  m-auto mt-1">
      <fieldset className=" border border-dashed border-separate border-red900">
        <legend className=" px-4 mx-6 rounded">
          <div className="flex gap-x-4 info-title rounded">
            <Icon
              src="colegiate"
              styles="h-7 w-7"
              iconType={IconTypes.DefaultIcon}
            />
            <p className="title1 ">{members.menu}</p>
          </div>
        </legend>
        <div className="body-info flex items-center gap-x-3">
          <p className=" text-justify my-2">{members.text}</p>
          <Link className="hover:underline text-blue-500" href={members.link}>
            Aqui
          </Link>
        </div>
      </fieldset>
    </div>
  );
}

export default InfoPage;
