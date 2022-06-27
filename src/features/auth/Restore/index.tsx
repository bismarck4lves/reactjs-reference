import { Form } from "components/Form";
import styled from "styled-components";
import CodigoStep from "./CodigoStep";
import { useRestoreContext } from "./Context";
import EmailStep from "./EmailStep";
import NovaSenha from "./NovaSenha";
import { Steps } from "./types_d";

const StepContent = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "" : "none")};
`;

const Restore = () => {
  const [{ formRef, activeStep }] = useRestoreContext();
  const setVisible = (val) => val === activeStep;
  return (
    <Form ref={formRef} onSubmit={() => {}}>
      <StepContent show={setVisible(Steps.email)}>
        <EmailStep />
      </StepContent>
      <StepContent show={setVisible(Steps.codigo)}>
        <CodigoStep />
      </StepContent>
      <StepContent show={setVisible(Steps.novaSenha)}>
        <NovaSenha />
      </StepContent>
    </Form>
  );
};

export default Restore;
