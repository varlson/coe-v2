import React from "react";
import { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Ementas",
  },
};

function page() {
  return (
    <div>
      <InfoPage />
    </div>
  );
}

export default page;
