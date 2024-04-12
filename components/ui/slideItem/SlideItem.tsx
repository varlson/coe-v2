import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useMediaQuery } from "@uidotdev/usehooks";
import { textSplitter } from "@/util/util";
function SlideItem({
  src,
  text,
  link,
}: {
  src: string;
  text: string;
  link: string;
}) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <div className="relative h-[calc(50vh)] md:h-[calc(100vh-200px)] bg-slate-400 ">
      <div className="absolute slide-resume">
        <p className="w-10/12 m-auto text-justify">
          <Link className="" href={`/noticias/${link}`}>
            {textSplitter(text, isSmallDevice ? 50 : 200)}
          </Link>
        </p>
      </div>
      <Image
        className="object-cover h-full w-full"
        src={src}
        alt="slide item"
        height={500}
        width={800}
        placeholder="blur"
        blurDataURL="/imgs/laoding.jpg"
      />
    </div>
  );
}

export default SlideItem;
