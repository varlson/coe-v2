import Info from "@/components/Info/Info";
import { colegiate_info } from "@/constants/lan/pt";
import React from "react";

function page() {
  const { groups } = colegiate_info.search;
  return (
    <Info logo="colegiate" title="Grupos de Pesquisas">
      <div>
        {groups.text.split("&").map((paragraph, index) => (
          <div key={index}>
            {paragraph.includes("*") ? (
              <p className="titl2 my-2 underline text-justify">
                {paragraph.split("*")[1]}
              </p>
            ) : (
              <p className="my-1 text-justify">{paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </Info>
  );
}

export default page;
