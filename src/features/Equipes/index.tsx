import DataGrid, { GridColDef } from "components/DataGrid";
import CellActions from "./CellActions";
import { useEquipesContext } from "./Context";
import MainHeader from "./MainHeader";
import ModalCreateUpdate from "./ModalCreateUpdate";

export function Equipes() {
  const [{ equipes, loadingData }, { fechEquipesSearch }] = useEquipesContext();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#Código",
      renderCell: (cellValues) => cellValues.row.id,
    },
    {
      field: "nome",
      headerName: "Equipe",
      width: 700,
      renderCell: (cellValues) => cellValues.row.nome,
    },
    {
      field: "entrada",
      headerName: "Entrada",
      renderCell: (cellValues) => cellValues.row.entrada,
    },
    {
      field: "saida",
      headerName: "Saída",
      renderCell: (cellValues) => cellValues.row.saida,
    },
    {
      field: "actions",
      headerName: "Ações",
      renderCell: (cellValues) => <CellActions {...cellValues.row} />,
      width: 80,
    },
  ];

  const onHandleSearchEquipes = (search?) => {
    fechEquipesSearch(search);
  };

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MainHeader onSearch={onHandleSearchEquipes} />
      <DataGrid rows={equipes} columns={columns} loading={loadingData} />
      <ModalCreateUpdate />
    </div>
  );
}
