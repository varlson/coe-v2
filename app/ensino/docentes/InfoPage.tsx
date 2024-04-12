"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function InfoPage() {
  const { Education } = useContextApp().Colegiate_Info;
  const { teachers } = Education;
  return (
    <Info logo="teacher" title={teachers.menu}>
      <div className="flex gap-x-3 justify-between items-center">
        {teachers.departments.map((dep, index) => (
          <div className="w-full rounded p-2 shadow-md bg-darkLigh" key={index}>
            <Link className="w-full" href={dep.link}>
              <Image
                src={`/imgs/${dep.logo}`}
                alt="Department"
                height={500}
                width={500}
                className="w-9/12 m-auto object-fill h-24"
              />
            </Link>
          </div>
        ))}
      </div>
    </Info>
  );
}

export default InfoPage;
