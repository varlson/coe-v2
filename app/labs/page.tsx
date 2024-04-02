import Info from "@/components/Info/Info";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Loboratórios",
  },
};

function page() {
  return (
    <Info logo="infra" title="Infraestrutura">
      <p>a</p>
    </Info>
  );
}

export default page;
