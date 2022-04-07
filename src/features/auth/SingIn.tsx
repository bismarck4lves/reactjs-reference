import { Card, CardContent, Stack } from "@mui/material";
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
import React from "react";
import * as Yup from "yup";

export const singInValidator = Yup.object().shape({
  username: Yup.string()
    .email()
    .required("Você deve informar o email de login"),
  password: Yup.string()
    .min(6, `A senha deve conter no mínimo 6 caracteres`)
    .required("A senha é obrigatória"),
});
interface FormDataProps {
  username: string;
  password: string;
}
const SingIn: React.FC = () => {
  const [, { singIn }] = useAuthContext();
  const { openToast, errorToast } = useToastContext();

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

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ height: "100vh" }}
    >
      <Card>
        <CardContent>
          <Form ref={formRef} onSubmit={onHandleSubmit}>
            <Stack spacing={2}>
              <TextField label="email" name="username" onChange={handleInputChange} />
              <PasswordField label="senha" name="password" onChange={handleInputChange} />
              <Button 
                type="submit" 
                loading={loading}
                disabled={!isValidFormState}
                fullWidth
              >
                Entrar
              </Button>
            </Stack>
          </Form>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default SingIn;
