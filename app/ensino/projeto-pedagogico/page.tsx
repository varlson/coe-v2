import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Projeto Pedagógico",
  },
};

function page() {
  const { course_menu } = colegiate_info;
  return (
    <Info logo="project" title="Projeto Pedagógico">
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

export default page;
