import { colegiate_info } from "@/constants/lan/en";
import React from "react";

export enum ModalTypes {
  ConfirmModal = 1,
  DefaultModal,
  SpinnerModal,
}

export interface DefaultModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children?: React.ReactNode;
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

export type SubMenuType = {
  menu: string;
  id: string;
  subItens: {
    label: string;
    link: string;
  }[];
};

export type IPost = {
  noticeNumber?: string;
  _id?: string;
  title: string;
  img: string;
  resumo: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
  postType: number;
  author: any;
  edit_by?: any;
  slug: string;
  author_name: string;
  en: string;
  es: string;
};

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  avatar: string;
  activityStatus: boolean;
  createdAt: Date;
  updatedAt: Date;
  premissionRole: number;
  passRecovery?: string;
}

export enum PostTypes {
  SLIDE = 1,
  NEWS,
  NOTICE,
  SLIDE_AND_NEWS,
  SLIDE_AND_NOTICE,
  NOTICE_AND_NEWS,
  ALL,
}

export type MobileMenuPropsType = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const weekDay = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export type ColegiaInfoType = typeof colegiate_info;
