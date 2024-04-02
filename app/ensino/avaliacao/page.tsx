import React from "react";
import { Metadata } from "next";
import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Avaliação",
  },
};

function page() {
  const { course_evaluation } = colegiate_info;
  return (
    <Info logo="nota" title="Avaliação do MEC">
      <div className="flex gap-x-1">
        <p>{course_evaluation.text}</p>
        <Link className="link" href={course_evaluation.link}>
          aqui
        </Link>
      </div>
    </Info>
  );
}

export default page;
