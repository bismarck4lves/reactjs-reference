import DataGrid, { GridColDef } from "components/DataGrid";
import React from "react";
import DataCrudCellEdit from "./DataCrudCellEdit";
import DataCrudFromModal from "./DataCrudFromModal";
import DataCrudFromModalSuccess from "./DataCrudFromModalSuccess";
import DataCrudHeader from "./DataCrudHeader";
import { DataCRUDProps } from "./dataCrud_d";

const DataCRUDContainer: React.FC<DataCRUDProps> = (props) => {
  props.columns.push({
    field: "actions",
    headerName: "Ações",
    renderCell: (cellValues) => (
      <DataCrudCellEdit {...cellValues.row} onClickEdit={props.onClickEdit} />
    ),
    width: 80,
  } as GridColDef);

  return (
    <>
      <DataCrudHeader {...props} />
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={props.data}
          columns={props.columns}
          loading={props.loadingData}
        />
      </div>
      <DataCrudFromModal {...props} />
      <DataCrudFromModalSuccess {...props} />
    </>
  );
};

export default DataCRUDContainer;
