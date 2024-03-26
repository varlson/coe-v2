import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <div className="flex text-white gap-x-2 justify-center items-center">
        <Image
          className="h-12 w-5"
          src="/imgs/ufop.jpg"
          height={200}
          width={200}
          alt="Ufop logo"
        />
        <div className="font-oswald flex flex-col">
          <p className="font-bold text-sm">
            Colegiado do Curso da Engenharia Elétrica
          </p>
          <p className="text-center font-ligth text-sm">
            ICEA - Campus João Monlevade
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
