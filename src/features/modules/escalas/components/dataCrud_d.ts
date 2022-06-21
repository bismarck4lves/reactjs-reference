import { GridColDef } from "components/DataGrid";
import React from "react";

export interface DataCRUDProps {
  onSearch: (event) => any;
  onClickEdit: (val) => any;
  onClickNew: () => any;
  columns: GridColDef[];
  loadingData: boolean;
  data: any[];
  formNode: React.ReactNode;
  formModalOpened: boolean;
  formCreateCase: boolean;
  formModalCancel: () => any;
  formModalSave: () => any;
  successDialogFrom: boolean;
  setSuccessDialogFrom: React.Dispatch<React.SetStateAction<boolean>>;
  successDialogFromMessage: string
}
