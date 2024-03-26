import Image from "next/image";
import React from "react";

function DefaultIcon({ src, styles }: { styles: string; src: string }) {
  return (
    <div>
      <Image
        width={250}
        height={200}
        alt="brazil falg"
        src={`/icons/${src}.png`}
        className={` ${styles} object-fill`}
      />
    </div>
  );
}

export default DefaultIcon;
