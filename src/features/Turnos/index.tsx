import DataGrid, { GridColDef } from "components/DataGrid";
import React from "react";
import CellActions from "./CellActions";
import { useTurnosContext } from "./Context";
import MainHeader from "./MainHeader";
import ModalCreateUpdate from "./ModalCreateUpdate";
const Turnos: React.FC = () => {
  const [{ turnos, loadingData }, { fechTurnosSearch }] = useTurnosContext();

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
      field: "inicio",
      headerName: "Inicio",
      renderCell: (cellValues) => cellValues.row.inicio,
    },
    {
      field: "fim",
      headerName: "Fim",
      renderCell: (cellValues) => cellValues.row.fim,
    },
    {
      field: "actions",
      headerName: "Ações",
      renderCell: (cellValues) => <CellActions {...cellValues.row} />,
      width: 80,
    },
  ];

  const onHandleSearchTurnos = (search?) => {
    fechTurnosSearch(search);
  };

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MainHeader onSearch={onHandleSearchTurnos} />
      <DataGrid rows={turnos} columns={columns} loading={loadingData} />
      <ModalCreateUpdate />
    </div>
  );
};

export default Turnos;
