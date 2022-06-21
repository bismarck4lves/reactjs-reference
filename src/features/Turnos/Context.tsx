import React from "react";
import { fetchTurnos } from "./services";
import { TurnosProps } from "./types_d";

interface State {
  turnos: TurnosProps[];
  loadingData: boolean;
  actionCreate: boolean;
  dialogNovo: boolean;
  turnoSelecionado: TurnosProps;
}

interface Dispatch {
  fechTurnosSearch: (search?) => any;
  setTurnoSelecionado: React.Dispatch<React.SetStateAction<TurnosProps>>;
  setDialogNovo: React.Dispatch<React.SetStateAction<boolean>>;
  setActionCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContextProps = [State, Dispatch];

const Context = React.createContext({} as ContextProps);

export function TurnosProvider({ children }) {
  const [turnos, setTurnos] = React.useState<TurnosProps[]>([]);
  const [turnoSelecionado, setTurnoSelecionado] = React.useState<TurnosProps>(
    {} as TurnosProps
  );
  const [loadingData, setloadingData] = React.useState(false);
  const [actionCreate, setActionCreate] = React.useState(false);
  const [dialogNovo, setDialogNovo] = React.useState(false);

  const fechTurnosSearch = React.useCallback((search?) => {
    setloadingData(true);
    fetchTurnos(search)
      .then((res) => setTurnos(res))
      .finally(() => setloadingData(false));
  }, []);

  React.useEffect(() => fechTurnosSearch(), [fechTurnosSearch]);

  return (
    <Context.Provider
      value={[
        {
          turnos,
          loadingData,
          actionCreate,
          turnoSelecionado,
          dialogNovo,
        },
        {
          fechTurnosSearch,
          setTurnoSelecionado,
          setDialogNovo,
          setActionCreate,
        },
      ]}
    >
      {children}
    </Context.Provider>
  );
}

export function useTurnosContext(): ContextProps {
  return React.useContext(Context);
}
