import React from "react";
import { fetchEquipes } from "./services";
import { EquipeProps } from "./types_d";

interface State {
  equipes: EquipeProps[];
  loadingData: boolean;
  actionCreate: boolean;
  dialogNovo: boolean;
  equipeSelecionada: EquipeProps;
}

interface Dispatch {
  fechEquipesSearch: (search?) => any;
  setEquipeSelecionada: React.Dispatch<React.SetStateAction<EquipeProps>>;
  setDialogNovo: React.Dispatch<React.SetStateAction<boolean>>;
  setActionCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContextProps = [State, Dispatch];

const Context = React.createContext({} as ContextProps);

export function EquipesProvider({ children }) {
  const [equipes, setEquipes] = React.useState<EquipeProps[]>([]);
  const [equipeSelecionada, setEquipeSelecionada] = React.useState<EquipeProps>(
    {} as EquipeProps
  );
  const [loadingData, setloadingData] = React.useState(false);
  const [actionCreate, setActionCreate] = React.useState(false);
  const [dialogNovo, setDialogNovo] = React.useState(false);

  const fechEquipesSearch = React.useCallback((search?) => {
    setloadingData(true);
    fetchEquipes(search)
      .then((res) => setEquipes(res))
      .finally(() => setloadingData(false));
  }, []);

  React.useEffect(() => fechEquipesSearch(), [fechEquipesSearch]);

  return (
    <Context.Provider
      value={[
        {
          equipes,
          loadingData,
          actionCreate,
          equipeSelecionada,
          dialogNovo,
        },
        {
          fechEquipesSearch,
          setEquipeSelecionada,
          setDialogNovo,
          setActionCreate,
        },
      ]}
    >
      {children}
    </Context.Provider>
  );
}

export function useEquipesContext(): ContextProps {
  return React.useContext(Context);
}
