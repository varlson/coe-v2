import { IPost } from "@/types/types";
import { textSplitter } from "@/util/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardItems({ title, body, img, resumo }: IPost) {
  return (
    <Link href="">
      <div className="my-2 bg-white shadow-md rounded card-item ">
        <Image
          src={img}
          className="h-44 object-cover"
          width={800}
          height={500}
          alt="card"
        />
        <p className="font-playFair px-2 text-justify font-semibold">
          Empresa Júnior de Farmácia está com processo seletivo aberto
        </p>
        <p className="font-jura my-2 text-sm px-2">27 Março 2024</p>
        <p className="px-2 text-justify text-sm pb-2">
          {textSplitter(
            "A Administração Central da Universidade Federal de Ouro Preto, diante da greve dos servidores técnico-administrativos, vem, mais uma vez, reconhecer o movimento, entendendo que a pauta é justa. A consideração da justiça da pauta reafirma o respeito pelas reivindicações legítimas dos servidores"
          )}
        </p>
      </div>
    </Link>
  );
}

export default CardItems;
