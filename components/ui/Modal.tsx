"use client";
import { ModalProps, ModalTypes } from "@/types/types";
import DefaultModal from "./DefaultModal";
import ConfirmModal from "./ConfirmModal";

function Modal({ isOpen, setIsOpen, modalType }: ModalProps) {
  if (modalType == ModalTypes.DefaultModal) {
    return <DefaultModal isOpen={isOpen} setIsOpen={setIsOpen} />;
  }

  return <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export default Modal;
