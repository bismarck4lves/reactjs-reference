import React from "react";
import { useNavigate } from "react-router-dom";
import { persistToken } from "utils/storage";

interface SingInProps {
  username: string;
  password: string;
}
const MOCK_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ3NTU5OTcyLCJlbWFpbCI6IiJ9.Rb1JWT OTGWXiLvm5pQqCRzHKiRJeB9zsvjOwpTT7tOBJ0c";

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

  const isAuthenticated = !!persistToken.get();

  const singIn = (payload: SingInProps) =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log(payload);
        persistToken.set(MOCK_TOKEN);
        navigate("/");
        resolve(true);
      }, 2000)
    );

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
