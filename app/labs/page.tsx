import Info from "@/components/Info/Info";
import LabCard from "@/components/ui/labCard/LabCard";
import { colegiate_info } from "@/constants/lan/pt";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Loboratórios",
  },
};

function page() {
  const { infra } = colegiate_info;
  return (
    <Info logo="infra" title="Infraestrutura">
      <div>
        {infra.labs.map((lab, index) => (
          <div key={index}>
            <LabCard {...lab} />
          </div>
        ))}
      </div>
    </Info>
  );
}

export default page;
