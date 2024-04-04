import React from "react";

import { Metadata } from "next";
import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import ScholarshipCard from "@/components/ui/scholarshipCard/ScholarshipCard";

export const metadata: Metadata = {
  title: {
    absolute: "COEE - Bolsas",
  },
};

function page() {
  const { scholarship } = colegiate_info;
  return (
    <Info logo="scholarship" title="Bolsas">
      <div className="  scroll-smooth">
        <p className="title3">{scholarship.text}</p>
        <div className="">
          {scholarship.types.map((schol, index) => (
            <div
              className=" scroll-smooth p-4 my-5 rounded bg-darkLight shadow"
              key={index}
            >
              <ScholarshipCard {...schol} />
            </div>
          ))}
        </div>
      </div>
    </Info>
  );
}

export default page;
