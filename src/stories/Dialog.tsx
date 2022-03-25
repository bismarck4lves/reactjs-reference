import { Stack } from "@mui/material";
import React from "react";
import { Button } from "../components/Button";
import Dialog from "../components/Dialog";
import Container from "./StorieContainer";

const LOREM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const dialog = () => {
  const [simpleDialog, setSimpleDialog] = React.useState(false);
  const [fullScreem, setfullScreem] = React.useState(false);

  const onHandleSimpleDialog = () => {
    setfullScreem(false)
    setSimpleDialog((prev) => !prev);
  };

  const onHandleFullDialog = () => {
    setfullScreem(true)
    setSimpleDialog((prev) => !prev);
  };

  function SimpleDialog() {
    return (
      <Dialog open={simpleDialog} fullScreen={fullScreem}>
        <Dialog.Title closeButton={onHandleSimpleDialog}>
          Modal simples
        </Dialog.Title>
        <Dialog.Content>{LOREM}</Dialog.Content>
        <Dialog.BooleanAction
          onReject={onHandleSimpleDialog}
          onResolve={onHandleSimpleDialog}
        />
      </Dialog>
    );
  }
  return (
    <Container title="Caixa de diálogo">
      <Stack direction="row" spacing={2}>
        <Button onClick={onHandleSimpleDialog}>Simple Dialog</Button>
        <Button onClick={onHandleFullDialog}>FullDialg</Button>
        <SimpleDialog />
      </Stack>
    </Container>
  );
};

export default dialog;
