import { Stack } from "@mui/material";
import { Button } from "components/Button";
import Dialog from "components/Dialog";
import { TextField } from "components/Form";
import Typography from "components/Typography";
import { useToastContext } from "contexts/ToastContext";
import React from "react";
import { obsctureEmail } from "utils/text";
import CodeSended from "vetors/CodeSended";
import * as Yup from "yup";
import { useRestoreContext } from "./Context";
import { restoreService } from "./service";
import { Steps } from "./types_d";

export const validator = Yup.object().shape({
  email: Yup.string().email().required("Email inválido"),
});

const EmailStep: React.FC = () => {
  const [successDialogOpened, setSuccessDialogOpened] = React.useState(false);
  const [disabledButton, setDisabledButton] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [, { getCurrentForm, setActiveStep }] = useRestoreContext();
  const { errorToast } = useToastContext();

  const onHandleClickNext = () => {
    const formData = getCurrentForm();
    setLoading(true);
    restoreService
      .sendCodeVerification(formData)
      .then(() => setSuccessDialogOpened(true))
      .catch((e) => errorToast(e.message))
      .finally(() => setLoading(false));
  };

  const onHandleInputChange = async () => {
    try {
      const data = getCurrentForm();
      await validator.validate(data, { abortEarly: false });
      setDisabledButton(false);
    } catch {
      setDisabledButton(true);
    }
  };

  const onHandleClickFechar = () => {
    setSuccessDialogOpened(false);
    setActiveStep(Steps.codigo);
  };
  function EmailMessage() {
    return (
      <Typography textAlign="center" size="xs">
        As instruções de redefinição de senha foram enviadas para{" "}
        {obsctureEmail(getCurrentForm().email)}
      </Typography>
    );
  }

  function SucessModal() {
    return (
      <Dialog open={successDialogOpened}>
        <Dialog.Content>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <CodeSended />
            <Typography textAlign="center" size="medium" weight="700">
              E-mail enviado com sucesso!
            </Typography>
            <EmailMessage />
          </Stack>
        </Dialog.Content>
        <Dialog.Actions>
          <Button variant="outlined" onClick={onHandleClickFechar}>
            Fechar
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
  return (
    <Stack spacing={2}>
      <TextField
        label="Email"
        placeholder="Email"
        type="email"
        name="email"
        onChange={onHandleInputChange}
      />

      <Button
        onClick={onHandleClickNext}
        fullWidth
        disabled={disabledButton}
        loading={loading}
      >
        Enviar e-mail
      </Button>
      <SucessModal />
    </Stack>
  );
};

export default EmailStep;
