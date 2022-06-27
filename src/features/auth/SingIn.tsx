import { Stack, Typography } from "@mui/material";
import { Button } from "components/Button";
import {
  Form,
  FormHandles,
  PasswordField,
  SubmitHandler,
  TextField
} from "components/Form";
import { useAuthContext } from "contexts/AuthContext";
import { useToastContext } from "contexts/ToastContext";
import { usePageNavigate } from "hooksUtils";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

const CliqueOption = styled.span`
  color: #4998fa;
  font-weight: 500;
  cursor: pointer;
`;

export const singInValidator = Yup.object().shape({
  username: Yup.string().required("Você deve informar o email de login"),
  password: Yup.string()
    // .min(6, `A senha deve conter no mínimo 6 caracteres`)
    .required("A senha é obrigatória"),
});
interface FormDataProps {
  username: string;
  password: string;
}
const SingIn: React.FC = () => {
  const [, { singIn }] = useAuthContext();
  const { openToast, errorToast } = useToastContext();
  const navigate = usePageNavigate()

  const [loading, setLoading] = React.useState(false);
  const [isValidFormState, setIsValidFormState] = React.useState(false);

  const formRef = React.useRef<FormHandles>(null);

  const onHandleSubmit: SubmitHandler<FormDataProps> = async (data) => {
    setLoading(true);
    singIn(data)
      .then(() => openToast("Credenciais válidas"))
      .catch(() => errorToast("Não foi possível fazer login"))
      .finally(() => setLoading(false));
  };

  const handleInputChange = async () => {
    try {
      const data = formRef.current.getData();
      await singInValidator.validate(data, { abortEarly: false });
      setIsValidFormState(true);
    } catch {
      setIsValidFormState(false);
    }
  };

  const goToRestoreFlow = () => navigate("reestore");
  
  return (
    <Form ref={formRef} onSubmit={onHandleSubmit}>
      <Stack spacing={2}>
        <TextField label="Login" name="username" onChange={handleInputChange} />
        <PasswordField
          label="Senha"
          name="password"
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          loading={loading}
          disabled={!isValidFormState}
          fullWidth
        >
          Entrar
        </Button>
        <div>
          <Typography>
            Esqueceu sua senha?{" "}
            <CliqueOption onClick={goToRestoreFlow}> Clique aqui </CliqueOption>{" "}
          </Typography>
        </div>
      </Stack>
    </Form>
  );
};

export default SingIn;
