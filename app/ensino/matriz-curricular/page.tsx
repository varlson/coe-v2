import Info from "@/components/Info/Info";
import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Matriz Curricular",
  },
};

function page() {
  return <InfoPage />;
}

export default page;
