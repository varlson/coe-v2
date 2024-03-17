export enum ModalTypes {
  ConfirmModal = 1,
  DefaultModal,
}

export interface DefaultModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export interface ModalProps extends DefaultModalProps {
  modalType: ModalTypes;
}

export interface ButtonProps {
  label: string;
  btnClickHandle?: () => void;
  color: string;
}
