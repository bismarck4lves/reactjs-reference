import { useToastContext } from "contexts/ToastContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { postSingIn } from "services/auth";
import { persistToken } from "utils/storage";
interface SingInProps {
  username: string;
  password: string;
}

interface State {
  isAuthenticated: boolean;
}
interface Dispatch {
  singIn(payload: SingInProps): Promise<any>;
  singOut(): void;
}
type ContextProps = [State, Dispatch];

const Context = React.createContext({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const { errorToast } = useToastContext();

  const isAuthenticated = !!persistToken.get();

  const singIn = (payload: SingInProps) =>
    postSingIn(payload)
      .then((res) => {
        persistToken.set(res.access);
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        errorToast("Usuário ou senha incorreto")
      });

  const singOut = () => localStorage.clear();

  return (
    <Context.Provider value={[{ isAuthenticated }, { singIn, singOut }]}>
      {children}
    </Context.Provider>
  );
};

export function useAuthContext(): ContextProps {
  return React.useContext(Context);
}
