import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

const Theme: React.FC = ({ children }) => {
  const { theme, dark } = useThemeContext();

  const Customtheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
    },
  });

  return <ThemeProvider theme={Customtheme}>{children}</ThemeProvider>;
};

export default Theme;
