import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Button } from "components/Button";
import { TextField } from "components/Form";
import { useToastContext } from "contexts/ToastContext";
import React from "react";
import * as Yup from "yup";
import { useRestoreContext } from "./Context";
import { restoreService } from "./service";
import { Steps } from "./types_d";

export const validator = Yup.object().shape({
  code: Yup.number().min(4).required(""),
});

const CodigoStep: React.FC = () => {
  const movetoNext = (id) => document.getElementById(id).focus();
  const [disabledButton, setDisabledButton] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [, { getCurrentForm, setActiveStep }] = useRestoreContext();
  const { errorToast } = useToastContext();

  function overWriteCode(params) {
    return { ...params, ...{ code: parseInt(params.code.join("")) } };
  }

  const onHandleInputChange = async () => {
    try {
      const formData = getCurrentForm();
      const data = overWriteCode(formData);
      await validator.validate(data, { abortEarly: false });
      setDisabledButton(false);
    } catch (e) {
      setDisabledButton(true);
    }
  };

  const onHandleClickNext = () => {
    const formData = getCurrentForm();
    const data = overWriteCode(formData);
    setLoading(true);
    restoreService
      .validateCode(data)
      .then(() => setActiveStep(Steps.novaSenha))
      .catch((e) => errorToast(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="aiai">
      <Stack spacing={2}>
        <Typography>
          Informe o código de quatro dígitos que você recebeu no e-mail para
          redefinir sua senha
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            name="code.0"
            mask="9"
            onKeyUp={() => movetoNext("code.1")}
            onChange={onHandleInputChange}
          />
          <TextField
            name="code.1"
            mask="9"
            onKeyUp={() => movetoNext("code.2")}
            onChange={onHandleInputChange}
          />
          <TextField
            name="code.2"
            mask="9"
            onKeyUp={() => movetoNext("code.3")}
            onChange={onHandleInputChange}
          />

          <TextField name="code.3" mask="9" onChange={onHandleInputChange} />
        </Stack>
        <Button
          onClick={onHandleClickNext}
          fullWidth
          disabled={disabledButton}
          loading={loading}
        >
          Próximo
        </Button>
      </Stack>
    </div>
  );
};

export default CodigoStep;
