import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Coe em Números",
  },
};

function page() {
  const { graduation } = colegiate_info;
  return (
    <Info logo="graduation" title="Graduação">
      {graduation.text.split("&").map((paragraph, index) => (
        <div key={index}>
          {paragraph.includes("*") ? (
            <div>
              <p className="my-2 title1">{paragraph.split("*")[1]}</p>
              <p className="text-justify my-2">{paragraph.split("*")[2]}</p>
            </div>
          ) : (
            <p className="text-justify my-2">{paragraph}</p>
          )}
        </div>
      ))}
    </Info>
  );
}

export default page;
