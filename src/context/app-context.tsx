import { IContext } from "../types";
import { ReactNode, createContext, FC, useContext } from "react";

export const Context = createContext({} as IContext.Theme);

Context.displayName = "ThemeContext";

export interface ThemeProviderProps {
  value: IContext.Theme;
  children: ReactNode;
}

export const Provider: FC<ThemeProviderProps> = ({ value, children }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
);

export const useTheme = () => useContext(Context);
