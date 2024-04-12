import React from "react";
import { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Membros da NDE",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
