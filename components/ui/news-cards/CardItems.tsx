import { IPost } from "@/types/types";
import { textSplitter } from "@/util/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardItems({ title, body, img, resumo, slug }: IPost) {
  return (
    <Link href={`/noticias/${slug}`}>
      <div className="my-2 bg-white shadow-md rounded card-item md:px-0 px-5">
        <Image
          src={img}
          className="h-44 object-cover rounded"
          width={800}
          height={500}
          alt="card"
          placeholder="blur"
          blurDataURL="/imgs/laoding.jpg"
        />
        <p className="font-playFair px-2 text-justify font-semibold max-h-[50px] overflow-hidden text-clip min-h-[50px]">
          {title}
        </p>
        <p className="font-jura my-2 text-sm px-2">27 Março 2024</p>
        <p className="px-2 text-justify text-sm pb-2 max-h-[70px] min-h-[70px]">
          {textSplitter(resumo)}
        </p>
      </div>
    </Link>
  );
}

export default CardItems;
