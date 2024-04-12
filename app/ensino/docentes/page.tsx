import Info from "@/components/Info/Info";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Docentes",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
