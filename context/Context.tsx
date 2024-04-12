"use client";
import {
  menusEN,
  SearchEN,
  ContactsEN,
  InfraEN,
  ScholarshipEN,
  EducationEN,
  HomeEN,
} from "@/constants/lan/en";
import {
  menusES,
  SearchES,
  ContactsES,
  InfraES,
  ScholarshipES,
  EducationES,
  HomeES,
} from "@/constants/lan/es";
import {
  menusPT,
  SearchPT,
  ContactsPT,
  InfraPT,
  ScholarshipPT,
  EducationPT,
  HomePT,
} from "@/constants/lan/pt";

import { ColegiaInfoType, IPost, SubMenuType } from "@/types/types";
import { createContext, useContext, useState } from "react";

type ColegiateInfoType = {
  Menus: typeof menusPT;
  Search: typeof SearchPT;
  Contacts: typeof ContactsPT;
  Scholarship: typeof ScholarshipPT;
  Education: typeof EducationPT;
  Home: typeof HomePT;
  Infra: typeof InfraPT;
};

type ContextDataType = {
  lanInitializer: () => Promise<void>;
  menuLan: SubMenuType[];
  Posts: IPost[];
  errorMsg: string | null;
  errorSetter: (error: string) => void;
  postsSetter: (posts: IPost[]) => void;
  Colegiate_Info: ColegiateInfoType;
};

const ColegiateDefaualt: ColegiateInfoType = {
  Menus: menusPT,
  Search: SearchPT,
  Contacts: ContactsPT,
  Scholarship: ScholarshipPT,
  Education: EducationPT,
  Home: HomePT,
  Infra: InfraPT,
};

const ColegiateInfoES: ColegiateInfoType = {
  Menus: menusES,
  Search: SearchES,
  Contacts: ContactsES,
  Scholarship: ScholarshipES,
  Education: EducationES,
  Home: HomeES,
  Infra: InfraES,
};

const ColegiateInfoEN: ColegiateInfoType = {
  Menus: menusEN,
  Search: SearchEN,
  Contacts: ContactsEN,
  Scholarship: ScholarshipEN,
  Education: EducationEN,
  Home: HomeEN,
  Infra: InfraEN,
};

const defaultDatas = {
  lanInitializer: async () => {},
  menuLan: menusPT,
  Posts: [],
  errorMsg: null,
  errorSetter: (error: string) => {},
  postsSetter: (posts: IPost[]) => {},
  Colegiate_Info: ColegiateDefaualt,
};
const AppContext = createContext<ContextDataType>(defaultDatas);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [menuLan, setMenuLan] = useState<SubMenuType[]>(menusPT);
  const [Posts, setPots] = useState<IPost[]>([]);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [Colegiate_Info, setColegiate_Info] =
    useState<ColegiateInfoType>(ColegiateDefaualt);

  const errorSetter = (error: string) => {
    setErrorMsg(error);
  };

  const postsSetter = (posts: IPost[]) => {
    setPots(posts);
  };

  const lanInitializer = async () => {
    const lan = localStorage.getItem("lan") || "pt";
    const menusLan = lan == "pt" ? menusPT : lan == "es" ? menusES : menusEN;
    const currentColInfo =
      lan == "pt"
        ? ColegiateDefaualt
        : lan == "es"
        ? ColegiateInfoES
        : ColegiateInfoEN;

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
