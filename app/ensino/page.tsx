import Info from "@/components/Info/Info";
import React from "react";

import { Metadata } from "next";
import { useContextApp } from "@/context/Context";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Coe em Números",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
