import { ModalProps, ModalTypes } from "@/types/types";
import ConfirmModal from "../ui/ConfirmModal";
import DefaultModal from "../ui/DefaultModal";
import SpinnerModal from "../ui/SpinnerModal";

function Modal({ isOpen, setIsOpen, modalType, children }: ModalProps) {
  if (modalType == ModalTypes.DefaultModal) {
    return (
      <DefaultModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </DefaultModal>
    );
  } else if (modalType == ModalTypes.ConfirmModal) {
    return <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} />;
  } else {
    return <SpinnerModal isOpen={isOpen} setIsOpen={setIsOpen} />;
  }
}

export default Modal;
