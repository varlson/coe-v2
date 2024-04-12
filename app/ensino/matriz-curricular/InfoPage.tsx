"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import Link from "next/link";
import React from "react";
function InfoPage() {
  const { Education } = useContextApp().Colegiate_Info;
  return (
    <Info logo="curriculum" title={Education.course_curriculum.menu}>
      <div>
        {Education.course_curriculum.content.map((item, index) => (
          <div key={index} className="flex gap-x-3 my-1">
            <p>{item.label}</p>
            <Link className="text-blue-500 underline" href={item.link}>
              Aqui
            </Link>
          </div>
        ))}
      </div>
    </Info>
  );
}

export default InfoPage;
