import { ModalProps, ModalTypes } from "@/types/types";
import ConfirmModal from "../ui/ConfirmModal";
import DefaultModal from "../ui/DefaultModal";

function Modal({ isOpen, setIsOpen, modalType }: ModalProps) {
  if (modalType == ModalTypes.DefaultModal) {
    return <DefaultModal isOpen={isOpen} setIsOpen={setIsOpen} />;
  }

  return <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export default Modal;
