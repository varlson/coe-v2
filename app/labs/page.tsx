import { Metadata } from "next";
import React from "react";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Loboratórios",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
