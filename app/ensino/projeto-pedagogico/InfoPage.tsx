"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import Link from "next/link";
import React from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const { course_menu } = Colegiate_Info.Education;
  return (
    <Info logo="project" title={Colegiate_Info.Education.menu}>
      <div className="flex gap-x-1">
        <p>{course_menu.text}</p>
        <Link
          className="text-blue-500  hover:underline"
          href={course_menu.link}
        >
          aqui
        </Link>
      </div>
    </Info>
  );
}

export default InfoPage;
