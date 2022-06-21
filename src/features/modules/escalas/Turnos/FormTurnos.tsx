import { Stack } from "@mui/material";
import { Form, TextField } from "components/Form";
import React from "react";
interface FormTurnosProps {
  formInitalData: any;
  formRef: any;
}
const FormTurnos: React.FC<FormTurnosProps> = (props) => {
  return (
    <Form
      ref={props.formRef}
      onSubmit={() => {}}
      initialData={props.formInitalData}
    >
      <TextField label="Nome da equipe" variant="outlined" name="nome" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <TextField
          type="time"
          label="Início"
          variant="outlined"
          name="inicio"
        />
        <TextField type="time" label="Fim" variant="outlined" name="fim" />
      </Stack>
    </Form>
  );
};

export default FormTurnos;
