"use client";
import { menusEN } from "@/constants/lan/en";
import { menusES } from "@/constants/lan/es";
import { colegiate_info, menus } from "@/constants/lan/pt";
import { colegiate_info as ColEn } from "@/constants/lan/en";
import { colegiate_info as ColEs } from "@/constants/lan/es";
import { ColegiaInfoType, IPost, SubMenuType } from "@/types/types";
import { createContext, useContext, useState } from "react";

type ContextDataType = {
  lanInitializer: () => Promise<void>;
  menuLan: SubMenuType[];
  Posts: IPost[];
  errorMsg: string | null;
  errorSetter: (error: string) => void;
  postsSetter: (posts: IPost[]) => void;
  Colegiate_Info: any;
};
const defaultDatas = {
  lanInitializer: async () => {},
  menuLan: [],
  Posts: [],
  errorMsg: null,
  errorSetter: (error: string) => {},
  postsSetter: (posts: IPost[]) => {},
  Colegiate_Info: colegiate_info,
};
const AppContext = createContext<ContextDataType>(defaultDatas);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [menuLan, setMenuLan] = useState<SubMenuType[]>([]);
  const [Posts, setPots] = useState<IPost[]>([]);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [Colegiate_Info, setColegiate_Info] = useState<any>(colegiate_info);

  const errorSetter = (error: string) => {
    setErrorMsg(error);
  };

  const postsSetter = (posts: IPost[]) => {
    setPots(posts);
  };

  const lanInitializer = async () => {
    const lan = localStorage.getItem("lan") || "pt";
    const menusLan = lan == "pt" ? menus : lan == "es" ? menusES : menusEN;
    const currentColInfo =
      lan == "pt" ? colegiate_info : lan == "es" ? ColEs : ColEn;

    setColegiate_Info(currentColInfo);
    setMenuLan(menusLan);
  };

  return (
    <AppContext.Provider
      value={{
        lanInitializer,
        menuLan,
        errorMsg,
        Posts,
        errorSetter,
        postsSetter,
        Colegiate_Info,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useContextApp = () => {
  return useContext(AppContext);
};
