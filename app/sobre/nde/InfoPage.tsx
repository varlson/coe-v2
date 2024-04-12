"use client";
import Info from "@/components/Info/Info";
import Modal from "@/components/modal/Modal";
import Icon from "@/components/ui/icons/Icon";
import { useContextApp } from "@/context/Context";
import { IconTypes, ModalTypes } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const { about_nde } = Colegiate_Info.Home;
  return (
    <div className="md:w-9/12 bg-white py-2 px-4  m-auto mt-1">
      <fieldset className=" border border-dashed border-separate border-red900">
        <legend className=" px-4 mx-6 rounded">
          <div className="flex gap-x-4 info-title rounded">
            <Icon
              src="group"
              styles="h-7 w-7"
              iconType={IconTypes.DefaultIcon}
            />
            <p className="title1 ">{about_nde.menu}</p>
          </div>
        </legend>
        <div className="body-info">
          {about_nde.text.split("&").map((parag: string, index: number) => (
            <p key={index} className=" text-justify my-2">
              {parag}
            </p>
          ))}
          <ul className="pl-5 my-1 list-[upper-roman]">
            {about_nde.items.split("&").map((item: string, index: number) => (
              <li key={index} className="my-1 text-justify italic">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </fieldset>
    </div>
  );
}

export default InfoPage;
