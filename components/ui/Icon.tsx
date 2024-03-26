import { IconTypes } from "@/types/types";
import Image from "next/image";
import React from "react";
import DefaultIcon from "./DefaultIcon";
import ClickableIcon from "./ClickableIcon";

function Icon({
  iconType,
  src,
  styles,
}: {
  iconType: IconTypes;
  styles?: string;
  src: string;
}) {
  const _style = styles ? styles : "h-5 w-8";

  if (iconType == IconTypes.DefaultIcon)
    return <DefaultIcon src={src} styles={_style} />;

  return <ClickableIcon src={src} styles={_style} />;
}

export default Icon;
