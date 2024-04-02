import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Matriz Curricular",
  },
};

function page() {
  const { course_curriculum } = colegiate_info;
  return (
    <Info logo="curriculum" title="Matriz Curricular">
      <div>
        {course_curriculum.content.map((item, index) => (
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

export default page;
