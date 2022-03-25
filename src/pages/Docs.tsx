import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
//Stories
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import ButtonsStorie from "../stories/Buttons";
import DataGridStorie from "../stories/DataGrid";
import DialogStorie from "../stories/Dialog";
import Forms from "../stories/Forms";
import Theme from "../stories/Theme";
import ToastStorie from "../stories/Toast";
import Vectores from "../stories/Vectores";
import { getProjectVersion } from "../utils/version";


const Docs:React.FC = () => {
  return (
    <>
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
          <Theme/>
        </Grid>
        <Grid item xs={6}>
          <DataGridStorie />
          <Vectores/>
        </Grid>
        <Grid item xs={12}>
          <Forms />
        </Grid>
      </Grid>
    </>
  );
};

export default Docs;
