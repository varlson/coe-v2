"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function InfoPage() {
  const { Education } = useContextApp().Colegiate_Info;
  const { course_evaluation } = Education;
  return (
    <Info logo="nota" title={course_evaluation.menu}>
      <div className="flex gap-x-1">
        <p>{course_evaluation.text}</p>
        <Link className="link" href={course_evaluation.link}>
          aqui
        </Link>
      </div>
    </Info>
  );
}

export default InfoPage;
