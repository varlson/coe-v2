import Icon from "@/components/ui/icons/Icon";
import Video from "@/components/video/Video";
import { colegiate_info } from "@/constants/lan/pt";
import { IconTypes } from "@/types/types";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Colegiado",
  },
};

function page() {
  const { about_colegiate } = colegiate_info;
  return (
    <div className="w-9/12 bg-white py-2 px-4  m-auto mt-1">
      <fieldset className=" border border-dashed border-separate border-red900">
        <legend className=" px-4 mx-6 rounded">
          <div className="flex gap-x-4 info-title rounded">
            <Icon
              src="colegiate"
              styles="h-7 w-7"
              iconType={IconTypes.DefaultIcon}
            />
            <p className="title1 ">Sobre COEE</p>
          </div>
        </legend>
        <div className="body-info">
          {colegiate_info.about_nde.text.split("&").map((parag, index) => (
            <p key={index} className=" text-justify my-2">
              {parag}
            </p>
          ))}
          <ul className="pl-5 my-1 list-[upper-roman]">
            {about_colegiate.text.split("&").map((item, index) => (
              <li key={index} className="my-1 text-justify italic">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 ">
            <Video url={colegiate_info.about_colegiate.url} />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default page;
