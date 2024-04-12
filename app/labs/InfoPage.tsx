"use client";
import Info from "@/components/Info/Info";
import LabCard from "@/components/ui/labCard/LabCard";
import { useContextApp } from "@/context/Context";
import React from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const { Infra } = Colegiate_Info;
  return (
    <Info logo="infra" title="Infraestrutura">
      <div>
        {Infra.labs.map((lab, index) => (
          <div key={index}>
            <LabCard {...lab} />
          </div>
        ))}
      </div>
    </Info>
  );
}

export default InfoPage;
