import Image from "next/image";
import React from "react";

function Icon({ src }: { src: string }) {
  return (
    <div>
      <Image
        width={250}
        height={200}
        alt="brazil falg"
        src={`/icons/${src}.png`}
        className="h-7 w-10"
      />
    </div>
  );
}

export default Icon;
