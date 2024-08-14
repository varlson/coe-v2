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
import { createContext, useContext, useEffect, useState } from "react";

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
  EN: IPost[];
  ES: IPost[];
  errorMsg: string | null;
  errorSetter: (error: string) => void;
  postsSetter: (posts: IPost[]) => void;
  Colegiate_Info: ColegiateInfoType;
  lan: string;
  updateLan: (lan: string) => void;
  CurrentPosts: IPost[];
  updateCurrentPosts: (posts: IPost[]) => void;
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
  Posts: [] as IPost[],
  EN: [] as IPost[],
  ES: [] as IPost[],
  lan: "pt",
  errorMsg: null,
  errorSetter: (error: string) => {},
  postsSetter: (posts: IPost[]) => {},
  Colegiate_Info: ColegiateDefaualt,
  updateLan: (lan: string) => {},
  CurrentPosts: [] as IPost[],
  updateCurrentPosts: (posts: IPost[]) => {},
};
const AppContext = createContext<ContextDataType>(defaultDatas);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [menuLan, setMenuLan] = useState<SubMenuType[]>(menusPT);
  const [lan, setLan] = useState(localStorage.getItem("lan") || "pt");
  const [Posts, setPots] = useState<IPost[]>([]);
  const [EN, setEN] = useState<IPost[]>([]);
  const [ES, setES] = useState<IPost[]>([]);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [CurrentPosts, setCurrentPosts] = useState<IPost[]>(Posts);
  const [Colegiate_Info, setColegiate_Info] =
    useState<ColegiateInfoType>(ColegiateDefaualt);

  const errorSetter = (error: string) => {
    setErrorMsg(error);
  };

  const updateLan = (lan: string) => {
    setLan(lan);
    setCurrentPosts(lan == "pt" ? Posts : lan == "es" ? ES : EN);
  };

  const updateCurrentPosts = (posts: IPost[]) => {
    setCurrentPosts(posts);
  };

  const postsSetter = (posts: IPost[]) => {
    const en = posts.map((item) => {
      const [title, resumo, body] = item.en.split("=>");
      const temp = { ...item, title: title, resumo: resumo, body: body };
      return temp;
    });

    const es = posts.map((item) => {
      const [title, resumo, body] = item.es.split("=>");
      const temp = { ...item, title: title, resumo: resumo, body: body };
      return temp;
    });
    setEN(en);
    setES(es);
    setCurrentPosts(lan == "pt" ? posts : lan == "es" ? es : en);
    setPots(posts);
  };

  const updatePost = (lan: "en" | "es" | "pt") => {
    const copied = Posts;
    if (lan != "pt") {
      const translated = copied.map((item) => {
        const [title, desc, body] = item[lan].split("=>");
        const current = { ...item, title: title, desc: desc, body: body };

        return current;
      });
    }
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
        ES,
        EN,
        lan,
        updateLan,
        CurrentPosts,
        updateCurrentPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useContextApp = () => {
  return useContext(AppContext);
};
