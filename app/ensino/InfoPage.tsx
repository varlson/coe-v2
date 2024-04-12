"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import React from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const graduation = Colegiate_Info.Education;
  return (
    <Info logo="graduation" title={graduation.menu}>
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

export default InfoPage;
