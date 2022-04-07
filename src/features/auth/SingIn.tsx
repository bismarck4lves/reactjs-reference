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

interface FormDataProps {
  username: string;
  password: string;
}
const SingIn: React.FC = () => {
  const [, { singIn }] = useAuthContext();
  const { openToast, errorToast } = useToastContext();

  const [loading, setLoading] = React.useState(false);

  const formRef = React.useRef<FormHandles>(null);

  const onHandleSubmit: SubmitHandler<FormDataProps> = async (data) => {
    setLoading(true);
    singIn(data)
      .then(() => openToast("Credenciais válidas"))
      .catch(() => errorToast("Não foi possível fazer login"))
      .finally(() => setLoading(false));
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
            <TextField label="login" name="username" />
            <PasswordField label="senha" name="password" />
            <Button type="submit" loading={loading} fullWidth>
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
