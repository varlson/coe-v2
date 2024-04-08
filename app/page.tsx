"use client";
import Cards from "@/components/card/Cards";
import LeftSide from "@/components/leftSide/LeftSide";
import Modal from "@/components/modal/Modal";
import RightSide from "@/components/rightSide/RightSide";
import Slide from "@/components/slide/Slide";
import { ModalTypes } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setClose = () => {
    setIsOpen(false);
  };
  return (
    <main className="md:w-9/12 m-auto px-5 md:px-0">
      <div className="text-white md:block fixed hidden left-0 right-0  asides ">
        <div className="flex justify-between">
          <div className="ml-4   p-4">
            <LeftSide />
          </div>
          <div className="mr-4 ">
            <RightSide />
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <Slide />
      </div>

      <div className="my-5">
        <Cards />
      </div>
    </main>
  );
}
