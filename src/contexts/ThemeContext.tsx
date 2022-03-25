import { ThemeOptions as SystemThemeOptions } from "@mui/system";
import React from "react";
import { persistTheme } from "../utils/storage";

type ContextProps = {
  dark: boolean;
  theme: SystemThemeOptions;
  setDark: (val: boolean) => void;
};

const Context = React.createContext({} as ContextProps);

export function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false);

  const [theme] = React.useState<SystemThemeOptions>({
    palette: {
      primary: {
        main: "#00995c",
        light: "#00F593",
        dark: "#007546",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#7D7D7D",
        light: "#DADADA",
        dark: "#4A4A4A",
        contrastText: "#FCFCFC",
      },
    }
  });

  const loadSavedTheme = React.useCallback(() => {
    const theme = persistTheme.get();
    if (theme) {
      setDark(theme?.theme);
    }
  }, []);

  React.useEffect(loadSavedTheme, []);

  return   <Context.Provider value={{ dark, theme, setDark }}>{children}</Context.Provider>
}

export function useThemeContext(): ContextProps {
  return React.useContext(Context);
}
