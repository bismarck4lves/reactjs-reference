import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      fontWeight: 600,
    },
  },
});

const Label: React.FC = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">{children}</Typography>
      </ThemeProvider>
  );
};

export default Label;
