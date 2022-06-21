import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useEquipesContext } from "./Context";
import { EquipeProps } from "./types_d";
const CellActions = (props: EquipeProps) => {
  const [, { setEquipeSelecionada, setDialogNovo, setActionCreate }] =
    useEquipesContext();

  const onHandleClickEdit = () => {
    setEquipeSelecionada(props);
    setDialogNovo(true);
    setActionCreate(false);
  };

  return (
    <IconButton
      onClick={onHandleClickEdit}
      aria-label="Editar"
      size="small"
      color="info"
    >
      <EditIcon />
    </IconButton>
  );
};

export default CellActions;
