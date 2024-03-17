export enum ModalTypes {
  ConfirmModal = 1,
  DefaultModal,
  SpinnerModal,
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

export type LanLabelType = {
  pt: string;
  es: string;
  en: string;
};
