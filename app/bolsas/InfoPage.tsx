"use client";
import Info from "@/components/Info/Info";
import ScholarshipCard from "@/components/ui/scholarshipCard/ScholarshipCard";
import { useContextApp } from "@/context/Context";
import React from "react";
function InfoPage() {
  const { Scholarship } = useContextApp().Colegiate_Info;
  return (
    <Info logo="scholarship" title={Scholarship.menu}>
      <div className="  scroll-smooth">
        <p className="title3">{Scholarship.text}</p>
        <div className="">
          {Scholarship.types.map((schol, index) => (
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

export default InfoPage;
