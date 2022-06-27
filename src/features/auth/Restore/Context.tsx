import { FormHandles } from "components/Form";
import React from "react";
import { RestoreFormProps, Steps } from "./types_d";

interface State {
  formRef: React.MutableRefObject<FormHandles>;
  activeStep: Steps;
}

interface Dispatch {
  setActiveStep: React.Dispatch<React.SetStateAction<Steps>>;
  getCurrentForm: () => RestoreFormProps
}

type ContextProps = [State, Dispatch];

const Context = React.createContext({} as ContextProps);

export const RestoreProvider: React.FC = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState<Steps>(Steps.email);
  const formRef = React.useRef<FormHandles>(null);
  const getCurrentForm = () => formRef.current.getData() as RestoreFormProps;
  return (
    <Context.Provider value={[{ formRef, activeStep }, { setActiveStep , getCurrentForm}]}>
      {children}
    </Context.Provider>
  );
};

export function useRestoreContext(): ContextProps {
  return React.useContext(Context);
}
