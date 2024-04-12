import React from "react";
import { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Contatos",
  },
};
function page() {
  return <InfoPage />;
}

export default page;
