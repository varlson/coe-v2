import React from "react";
import InfoPage from "./InfoPage";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "COE - Grupos de Pesquisa",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
