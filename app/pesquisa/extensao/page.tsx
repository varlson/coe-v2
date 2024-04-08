"use client";
import Info from "@/components/Info/Info";
import React from "react";

import { Metadata } from "next";
import { colegiate_info } from "@/constants/lan/pt";
import { useContextApp } from "@/context/Context";

// export const metadata: Metadata = {
//   title: {
//     absolute: "COE - Bolsa de Extensão",
//   },
// };

function Page() {
  const { Colegiate_Info } = useContextApp();
  const { ext_search } = Colegiate_Info.search;
  return (
    <Info title={ext_search.title}>
      <div className="my-5">
        {ext_search.project.map((proj, index) => (
          <div key={index} className="p-2 border-b min-h-44 py-5">
            <p className="title2 underline p-1 my-2">Projeto:</p>
            {<p className="text-justify scholarship">{proj.name}</p>}
            <div className="flex gap-x-2">
              <p className="p-2">{proj.coord}</p>
              <p className="p-2">{proj.mail}</p>
            </div>
          </div>
        ))}
      </div>
    </Info>
  );
}

export default Page;
