import Info from "@/components/Info/Info";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Projetos de Pesquisas",
  },
};

function page() {
  return (
    <Info logo="Analyze" title="Projetos de Pesquisa">
      p
    </Info>
  );
}

export default page;
