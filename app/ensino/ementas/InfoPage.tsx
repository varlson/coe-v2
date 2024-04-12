"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import Link from "next/link";
import React from "react";
function InfoPage() {
  const { Education } = useContextApp().Colegiate_Info;
  return (
    <Info logo="curriculum" title={Education.course_menu.menu}>
      <div>
        <p>Em breve ..</p>
      </div>
    </Info>
  );
}

export default InfoPage;
