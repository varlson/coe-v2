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

export enum IconTypes {
  DefaultIcon = 1,
  ClickableIcon,
}

export type SubMenuItemsType = {
  home: boolean;
  course: boolean;
  infra: boolean;
  search: boolean;
  scholarships: boolean;
  contacts: boolean;
};

export const defaultSubMenus: SubMenuItemsType = {
  home: false,
  scholarships: false,
  search: false,
  infra: false,
  contacts: false,
  course: false,
};
