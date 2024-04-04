import Link from "next/link";
import React from "react";

type ScholarShipPropType = {
  name: string;
  instruc: string;
  desc: string;
  link: string;
  id: string;
};

function ScholarshipCard({
  name,
  instruc,
  desc,
  link,
  id,
}: ScholarShipPropType) {
  return (
    <div className="scroll-smooth" id={id}>
      <p className="title2 my-1">{name}</p>
      <div className="mt-2 flex flex-col items-start">
        <p className="scholarship">Sobre a bolsa</p>
        <p className="scholarship-text">{desc}</p>
        <p className="scholarship mt-3">Instrução</p>
        <div className="">
          <p className="scholarship-text">{instruc}</p>
          <Link className="link" target="blank" href={link}>
            Acesse o link asseguir para mais informações.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipCard;
