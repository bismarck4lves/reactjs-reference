import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useTurnosContext } from "./Context";
import { TurnosProps } from "./types_d";

const CellActions = (props: TurnosProps) => {
  const [, { setTurnoSelecionado, setDialogNovo, setActionCreate }] =
    useTurnosContext();

  const onHandleClickEdit = () => {
    setTurnoSelecionado(props);
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
