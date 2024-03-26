import Image from "next/image";
import Link from "next/link";
import React from "react";

function ClickableIcon({ src, styles }: { styles: string; src: string }) {
  return (
    <div>
      <Link href="/busca">
        <Image
          width={250}
          height={200}
          alt="brazil falg"
          src={`/icons/${src}.png`}
          className={` ${styles} object-fill`}
        />
      </Link>
    </div>
  );
}

export default ClickableIcon;
