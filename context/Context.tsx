import { createContext, useContext } from "react";

type ContextDataType = {};
const defaultDatas = {};
const AppContext = createContext(defaultDatas);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export const useContextApp = () => {
  return useContext(AppContext);
};
