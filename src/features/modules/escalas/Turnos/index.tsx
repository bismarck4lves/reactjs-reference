import { GridColDef } from "components/DataGrid";
import { FormHandles } from "components/Form";
import React from "react";
import DataCRUD from "../components/DataCrud";
import FormTurnos from "./FormTurnos";
import turnoService from "./services";
import { TurnosProps } from "./types_d";

const Turnos: React.FC = () => {
  const [turnos, setTurnos] = React.useState<TurnosProps[]>([]);
  const formRef = React.useRef<FormHandles>(null);
  const [itemSelecionado, setItemSelecionado] = React.useState(null);
  const [createCase, setcreateCase] = React.useState(false);
  const [dialogFrom, setdialogFrom] = React.useState(false);
  const [successDialogFrom, setSuccessDialogFrom] = React.useState(false);
  const [loadingData, setLoadingData] = React.useState(false);

  const columns: GridColDef[] = [
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
  ];

  const onHandleSearchTurnos = (search?) => {
    fechTurnosSearch(search);
  };

  const onHandleClickEdit = (val) => {
    setItemSelecionado(val);
    setcreateCase(false);
    setdialogFrom(true);
  };

  const onClickNew = () => {
    setdialogFrom(true);
    setItemSelecionado({});
    setcreateCase(true);
  };

  const formModalCancel = () => {
    setdialogFrom(false);
    setItemSelecionado({});
  };

  const onSuccessSave = () => {
    fechTurnosSearch();
    formModalCancel();
    setSuccessDialogFrom(true);
  };

  const formModalSave = () => {
    const create = () => {
      const data = formRef.current.getData();
      turnoService.create(data as TurnosProps).then(() => onSuccessSave());
    };
    const update = () => {
      const data = formRef.current.getData();
      const { id } = itemSelecionado;
      turnoService.update(id, data as TurnosProps).then(() => onSuccessSave());
    };
    createCase ? create() : update();
  };

  const fechTurnosSearch = React.useCallback((search?) => {
    setLoadingData(true);
    const params = search ? { search } : {};
    turnoService
      .list(params)
      .then((res) => setTurnos(res))
      .finally(() => setLoadingData(false));
  }, []);

  React.useEffect(() => fechTurnosSearch(), [fechTurnosSearch]);

  return (
    <DataCRUD
      onClickEdit={onHandleClickEdit}
      onClickNew={onClickNew}
      onSearch={onHandleSearchTurnos}
      columns={columns}
      loadingData={loadingData}
      data={turnos}
      formNode={
        <FormTurnos formRef={formRef} formInitalData={itemSelecionado} />
      }
      formModalOpened={dialogFrom}
      formCreateCase={createCase}
      formModalCancel={formModalCancel}
      formModalSave={formModalSave}
      successDialogFrom={successDialogFrom}
      successDialogFromMessage={
        createCase
          ? "Turno cadastrado com sucesso"
          : "Turno atualizado com sucesso"
      }
      setSuccessDialogFrom={setSuccessDialogFrom}
    />
  );
};

export default Turnos;
