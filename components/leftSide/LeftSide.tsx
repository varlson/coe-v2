import Link from "next/link";
import React from "react";

function LeftSide() {
  return (
    <div className=" bg-red-500 px-5 text-center font-play_fair py-2 ">
      <p className="w-20 border-b title2">Menu</p>
      <ul className=" list-disc flex flex-col gap-y-2">
        <li className="border-b">
          <Link href="">Ensino</Link>
        </li>
        <li className="border-b">
          <Link href="">Pessoal</Link>
        </li>
        <li className="border-b">
          <Link href="">Horários</Link>
        </li>
        <li className="border-b">
          <Link href="">Pesquisa</Link>
        </li>
        <li className="border-b">
          <Link href="">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSide;
