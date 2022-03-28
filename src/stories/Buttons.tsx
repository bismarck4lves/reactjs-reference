import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { Button, IconButton } from "components/Button";
import React from "react";
import Container from "./StorieContainer";


const Buttons = () => {
  return (
    <Container title="Botões">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="text"> Enviar </Button>
        <Button variant="outlined"> Enviar </Button>
        <Button> Enviar </Button>
        <Button color="secondary"> Enviar </Button>
        <Button loading> Enviar </Button>
        <IconButton color="primary">
          <DeleteIcon fontSize="large" />
        </IconButton>
        <IconButton color="primary">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton color="primary">
          <DeleteIcon sx={{ fontSize: 60 }} />
        </IconButton>
        <Button fullWidth> Enviar </Button>
      </Stack>
    </Container>
  );
};

export default Buttons;
