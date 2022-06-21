import { GridColDef } from "components/DataGrid";
import { FormHandles } from "components/Form";
import React from "react";
import DataCRUD from "../components/DataCrud";
import FormEquipes from "./FormEquipes";
import equipesService from "./services";
import { EquipeProps } from "./types_d";

const Equipes: React.FC = () => {
  const [equipes, setEquipes] = React.useState<EquipeProps[]>([]);
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
      field: "entrada",
      headerName: "Entrada",
      renderCell: (cellValues) => cellValues.row.entrada,
    },
    {
      field: "saida",
      headerName: "Saída",
      renderCell: (cellValues) => cellValues.row.saida,
    },
  ];

  const onHandleSearchEquipes = (search?) => {
    fechEquipesSearch(search);
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
    fechEquipesSearch();
    formModalCancel();
    setSuccessDialogFrom(true);
  };

  const formModalSave = () => {
    const create = () => {
      const data = formRef.current.getData();
      equipesService.create(data as EquipeProps).then(() => onSuccessSave());
    };
    const update = () => {
      const data = formRef.current.getData();
      const { id } = itemSelecionado;
      equipesService.update(id, data as EquipeProps).then(() => onSuccessSave());
    };
    createCase ? create() : update();
  };

  const fechEquipesSearch = React.useCallback((search?) => {
    setLoadingData(true);
    const params = search ? { search } : {};
    equipesService
      .list(params)
      .then((res) => setEquipes(res))
      .finally(() => setLoadingData(false));
  }, []);

  React.useEffect(() => fechEquipesSearch(), [fechEquipesSearch]);

  return (
    <DataCRUD
      onClickEdit={onHandleClickEdit}
      onClickNew={onClickNew}
      onSearch={onHandleSearchEquipes}
      columns={columns}
      loadingData={loadingData}
      data={equipes}
      formNode={
        <FormEquipes formRef={formRef} formInitalData={itemSelecionado} />
      }
      formModalOpened={dialogFrom}
      formCreateCase={createCase}
      formModalCancel={formModalCancel}
      formModalSave={formModalSave}
      successDialogFrom={successDialogFrom}
      successDialogFromMessage={
        createCase
          ? "Equipe cadastrada com sucesso"
          : "Equipe atualizada com sucesso"
      }
      setSuccessDialogFrom={setSuccessDialogFrom}
    />
  );
};

export default Equipes;
