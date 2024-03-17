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
    <main
      className="flex h-screen justify-center items-center
    "
    >
      <Modal
        modalType={ModalTypes.ConfirmModal}
        setIsOpen={setClose}
        isOpen={isOpen}
      />

      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </button>
    </main>
  );
}
