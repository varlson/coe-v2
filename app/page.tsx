"use client";
import Modal from "@/components/modal/Modal";
import { ModalTypes } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setClose = () => {
    setIsOpen(false);
  };
  return (
    <main className="bg-black text-white text-xl">
      <div className="w-9/12 m-auto">
        <p className="title1">Hello world</p>
        <p className="my-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          sequi quo distinctio, nulla facere enim nihil accusantium explicabo
          fugit quod tenetur sit debitis? Suscipit qui, debitis vero ut
          molestiae eum. Aut, architecto labore? Adipisci animi ut, omnis cum,
          sequi ab, quos ratione reiciendis velit inventore aliquid accusantium
          pariatur! Sequi cumque officiis eius nulla! Omnis, atque in cumque at
          fuga perspiciatis! Voluptate voluptates sed magni adipisci,
          voluptatibus, velit ipsum pariatur neque perspiciatis minus rerum
          explicabo repellendus expedita debitis dolores libero! Incidunt animi
          aliquam velit in est sunt mollitia molestiae reiciendis inventore!
          Quis officiis sequi dolor iure quos repellat, recusandae vero! Quidem,
          perspiciatis unde assumenda consectetur laborum veniam libero soluta?
          Totam accusamus ullam blanditiis ut rem vel voluptas voluptatum esse
          quisquam ad.
        </p>
      </div>
    </main>
  );
}
