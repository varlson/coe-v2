import { DefaultModalProps } from "@/types/types";
import React from "react";
import Spiner from "./Spiner";

function SpinnerModal({ isOpen, setIsOpen }: DefaultModalProps) {
  const closHandle = () => {
    const wrap = document.getElementById("wrap") as HTMLDivElement;
    wrap.classList.add("close-anim");
    setTimeout(() => {
      setIsOpen();
      wrap.classList.remove("close-anim");
    }, 700);
  };

  if (!isOpen) return null;
  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={closHandle}
        id="modal-bg"
        className={` ${
          isOpen ? "bg-anim" : ""
        } opacity-50 bg-blacks absolute inset-0 `}
      ></div>
      <div
        id="wrap"
        className={`rounded-md z-50 relative shadow-md px-20 bg-white`}
      >
        <div className="px-20 gap-y-10 flex flex-col   bg-zync-300  p-2  ">
          <p className="text-center font-bold flex-1">Aguarde...</p>
          <Spiner />
        </div>
      </div>
    </div>
  );
}

export default SpinnerModal;
