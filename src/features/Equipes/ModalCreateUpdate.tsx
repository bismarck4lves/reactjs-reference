import { Stack } from "@mui/material";
import { Button } from "components/Button";
import Dialog from "components/Dialog";
import { Form, FormHandles, TextField } from "components/Form";
import Typography from "components/Typography";
import React from "react";
import MulherSentada from "vetors/mulher-sentada";
import { useEquipesContext } from "./Context";
import { createEquipes, updateEquipes } from "./services";
import { EquipeProps } from "./types_d";

const ModalCreateUpdate: React.FC = () => {
  const [
    { dialogNovo, actionCreate, equipeSelecionada },
    { fechEquipesSearch, setDialogNovo, setEquipeSelecionada },
  ] = useEquipesContext();
  const formRef = React.useRef<FormHandles>(null);
  const [dialogConfirmNovo, setDialogConfirmNovo] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onHandleNovoConfirmDialog = () => {};

  const onHandleCancel = () => {
    onHandleConfirmClose();
    setDialogNovo(false);
    setEquipeSelecionada({} as EquipeProps);
  };

  const onHandleConfirmClose = () => {
    setDialogConfirmNovo(false);
  };

  const onHandleSubmit = () => (actionCreate ? create() : update());

  const update = () => {
    const data = formRef.current.getData();
    const { id } = equipeSelecionada;
    setLoading(true);
    updateEquipes({ ...{ id }, ...data } as EquipeProps)
      .then(() => {
        fechEquipesSearch();
        onHandleNovoConfirmDialog();
      })
      .finally(() => setLoading(false));
  };
  
  const create = () => {
    const data = formRef.current.getData();
    setLoading(true);
    createEquipes(data as EquipeProps)
      .then(() => {
        fechEquipesSearch();
        onHandleNovoConfirmDialog();
      })
      .finally(() => setLoading(false));
  };

  function NovoDialog() {
    return (
      <Dialog open={dialogNovo}>
        <Dialog.Title>Cadastro de equipe</Dialog.Title>
        <Dialog.Content>
          <Form
            ref={formRef}
            onSubmit={() => {}}
            initialData={equipeSelecionada}
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
                label="Entrada"
                variant="outlined"
                name="entrada"
              />
              <TextField
                type="time"
                label="Saída"
                variant="outlined"
                name="saida"
              />
            </Stack>
          </Form>
        </Dialog.Content>
        <Dialog.BooleanAction
          onReject={onHandleCancel}
          onResolve={onHandleSubmit}
          resolveLoading={loading}
          resolveMsg="Salvar"
          rejectMsg="Cancelar"
        />
      </Dialog>
    );
  }

  function ConfirmDialg() {
    return (
      <Dialog open={dialogConfirmNovo}>
        <Dialog.Content>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <MulherSentada />
            <Typography weight="700">Equipe cadastrada com sucesso!</Typography>
          </Stack>
        </Dialog.Content>
        <Dialog.Actions>
          <Button variant="text" onClick={onHandleConfirmClose}>
            Fechar
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }

  return (
    <div>
      <NovoDialog />
      <ConfirmDialg />
    </div>
  );
};

export default ModalCreateUpdate;
