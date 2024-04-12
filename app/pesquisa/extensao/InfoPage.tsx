"use client";
import Info from "@/components/Info/Info";
import LabCard from "@/components/ui/labCard/LabCard";
import { useContextApp } from "@/context/Context";
import React from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const { ext_search } = Colegiate_Info.Search;
  return (
    <Info title={ext_search.menu}>
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

export default InfoPage;
