"use client";
import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import { useContextApp } from "@/context/Context";
import React from "react";

function Page() {
  const { Colegiate_Info } = useContextApp();
  const { groups } = Colegiate_Info.search;
  return (
    <Info logo="colegiate" title="Grupos de Pesquisas">
      <div>
        {groups.text.split("&").map((paragraph, index) => (
          <div key={index}>
            {paragraph.includes("*") ? (
              <p className="titl2 my-2 underline text-justify">
                {paragraph.split("*")[1]}
              </p>
            ) : (
              <p className="my-1 text-justify">{paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </Info>
  );
}

export default Page;
