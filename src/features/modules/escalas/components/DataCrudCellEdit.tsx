import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { DataCRUDProps } from "./dataCrud_d";

const DataCrudCellEdit = ({ onClickEdit, ...rest }: DataCRUDProps) => {

  const onHandleClick = () => {
    onClickEdit(rest)
  }
  return (
    <IconButton
      onClick={onHandleClick}
      aria-label="Editar"
      size="small"
      color="info"
    >
      <EditIcon />
    </IconButton>
  );
};

export default DataCrudCellEdit;
