"use client";
import { menusEN } from "@/constants/lan/en";
import { menusES } from "@/constants/lan/es";
import { menus } from "@/constants/lan/pt";
import { fetchPosts } from "@/services/api";
import { IPost, PostTypes, SubMenuType } from "@/types/types";
import { createContext, useContext, useState } from "react";

type ContextDataType = {
  lanInitializer: () => Promise<void>;
  menuLan: SubMenuType[];
  Posts: IPost[];
  errorMsg: string | null;
  errorSetter: (error: string) => void;
  postsSetter: (posts: IPost[]) => void;
};
const defaultDatas = {
  lanInitializer: async () => {},
  menuLan: [],
  Posts: [],
  errorMsg: null,
  errorSetter: (error: string) => {},
  postsSetter: (posts: IPost[]) => {},
};
const AppContext = createContext<ContextDataType>(defaultDatas);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [menuLan, setMenuLan] = useState<SubMenuType[]>([]);
  const [Posts, setPots] = useState<IPost[]>([]);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  const errorSetter = (error: string) => {
    setErrorMsg(error);
  };

  const postsSetter = (posts: IPost[]) => {
    setPots(posts);
  };

  const lanInitializer = async () => {
    const lan = localStorage.getItem("lan") || "pt";
    const menusLan = lan == "pt" ? menus : lan == "es" ? menusES : menusEN;

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useContextApp = () => {
  return useContext(AppContext);
};
