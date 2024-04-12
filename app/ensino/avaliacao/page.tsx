import React from "react";
import { Metadata } from "next";
import Info from "@/components/Info/Info";
import Link from "next/link";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Avaliação",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
