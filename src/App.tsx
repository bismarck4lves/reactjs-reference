import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
//Stories
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Snackbar from "./components/Snackbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./contexts/ToastContext";
import Theme from "./core/Theme";
import ButtonsStorie from "./stories/Buttons";
import DataGridStorie from "./stories/DataGrid";
import DialogStorie from "./stories/Dialog";
import ToastStorie from "./stories/Toast";
import { getProjectVersion } from "./utils/version";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <ThemeProvider>
        <Theme>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Projeto em React com Material UI. versão {getProjectVersion}
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ButtonsStorie />
          </Grid>
          <Grid item xs={6}>
            <DialogStorie />
            <ToastStorie />
          </Grid>
          <Grid item xs={6}>
            <DataGridStorie />
          </Grid>
        </Grid>
        {/* Final */}
        <Snackbar />
        </Theme>
      </ThemeProvider>
    </ToastProvider>
  );
};

export default App;
