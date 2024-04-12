import React from "react";
import InfoPage from "./InfoPage";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "COE - Em Números",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
