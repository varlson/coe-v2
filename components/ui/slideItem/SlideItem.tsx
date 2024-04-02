import Image from "next/image";
import React from "react";

function SlideItem({ src }: { src: string }) {
  return (
    <div className="relative h-[calc(100vh-200px)] bg-slate-400 ">
      <div className="absolute slide-resume">
        <p className="w-9/12 m-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam id
          saepe vel, dolor odit unde illum sapiente, sint magnam dignissimos
          recusandae minus quis soluta, iusto temporibus aut omnis dolorum
          facere.
        </p>
      </div>
      <Image
        className="object-cover h-full w-full"
        src={`/teste/${src}`}
        alt="slide item"
        height={500}
        width={800}
      />
    </div>
  );
}

export default SlideItem;
