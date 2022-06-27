import { Stack } from "@mui/material";
import { Button } from "components/Button";
import { PasswordField } from "components/Form";
import { useToastContext } from "contexts/ToastContext";
import { usePageNavigate } from "hooksUtils";
import React from "react";
import * as Yup from "yup";
import { useRestoreContext } from "./Context";
import { restoreService } from "./service";

const MIN_LEN_PASSWORD = 8;

export const validator = Yup.object().shape({
  new_password: Yup.string()
    .min(
      MIN_LEN_PASSWORD,
      `A senha deve conter no mínimo ${MIN_LEN_PASSWORD} caracteres`
    )
    .required("O campo senha deve ser informado"),

  confirm_new_password: Yup.string()
    .min(
      MIN_LEN_PASSWORD,
      `A senha deve conter no mínimo ${MIN_LEN_PASSWORD} caracteres`
    )
    .oneOf([Yup.ref("new_password"), null], "As senhas não coincidem")
    .required("O campo confirmar senha deve ser informado"),
});

const NovaSenha: React.FC = () => {
  const navigate = usePageNavigate();

  const [disabledButton, setDisabledButton] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [, { getCurrentForm }] = useRestoreContext();
  const { errorToast } = useToastContext();

  function overWriteCode(params) {
    return { ...params, ...{ code: parseInt(params.code.join("")) } };
  }

  const onHandleClickFechar = () => {
    const formData = getCurrentForm();
    setLoading(true);
    restoreService
      .newPassowd(overWriteCode(formData))
      .then(() => navigate("login"))
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

  return (
    <Stack spacing={2}>
      <PasswordField
        label="Nova Senha"
        name="new_password"
        onChange={onHandleInputChange}
      />
      <PasswordField
        label="Confirmar Senha"
        name="confirm_new_password"
        onChange={onHandleInputChange}
      />
      <Button
        fullWidth
        onClick={onHandleClickFechar}
        disabled={disabledButton}
        // loading={loading}
      >
        Redefinir Senha
      </Button>
    </Stack>
  );
};

export default NovaSenha;
