import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button } from "components/Button";
import {
  Form,
  FormHandles,
  SubmitHandler,
  TextField
} from "components/Form";
import { useThemeContext } from "contexts/ThemeContext";
import React from "react";
import Container from "./StorieContainer";


interface FormDataProps {
  primary: {
    main: string,
    light: string,
    dark: string,
    contrastText: string,
  },
  secondary: {
    main: string,
    light: string,
    dark: string,
    contrastText: string,
  },
};

const Theme = () => {
  const { dark, setDark, theme , setThemeColors} = useThemeContext();
  const formRef = React.useRef<FormHandles>(null);

  const onHandleSubmit: SubmitHandler<FormDataProps> = async (data) => {
    setThemeColors({palette: data})
  }
  function DarkActionButton() {
    return (
      <Button
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? "Tema Escuro" : "Tema Claro"}
      </Button>
    );
  }
  return (
    <Container title="Customização  de tema">
      <Stack spacing={2} direction="row">
        <DarkActionButton />
      </Stack>
      <Form ref={formRef} onSubmit={onHandleSubmit} initialData={theme.palette}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <TextField
              label="main"
              type="color"
              name="primary.main"
            />
            <TextField
              label="light"
              type="color"
              name="primary.light"
            />
            <TextField
              label="dark"
              type="color"
              name="primary.dark"
            />
            <TextField
              label="contrastText"
              type="color"
              name="secondary.contrastText"
            />
          </Grid>
          <Grid item sm={6}>
          <TextField
              label="main"
              type="color"
              name="secondary.main"
            />
            <TextField
              label="light"
              type="color"
              name="secondary.light"
            />
            <TextField
              label="dark"
              type="color"
              name="secondary.dark"
            />
            <TextField
              label="contrastText"
              type="color"
              name="secondary.contrastText"
            />
          </Grid>
          <Grid item sm={12}>
            <Button type="submit"> Aplicar paleta </Button>
            </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default Theme;
