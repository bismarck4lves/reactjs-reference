import { ThemeOptions as SystemThemeOptions } from "@mui/system";
import React from "react";
import { persistTheme } from "utils/storage";

type ContextProps = {
  dark: boolean;
  theme: SystemThemeOptions;
  setDark: (val: boolean) => void;
  setThemeColors: (val: SystemThemeOptions) => void;
};

const Context = React.createContext({} as ContextProps);

export function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false);

  const [theme, setThemeColors] = React.useState<SystemThemeOptions>({
    palette: {
      primary: {
        main: "#2B8C4B",
        light: "#C3EEF7",
        dark: "#0084AB",
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

  return   <Context.Provider value={{ dark, theme, setDark, setThemeColors }}>{children}</Context.Provider>
}

export function useThemeContext(): ContextProps {
  return React.useContext(Context);
}
