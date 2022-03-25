import { DataGrid, DataGridProps, ptBR } from "@mui/x-data-grid";
import React from "react";


const CustomDataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <DataGrid
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      {...props}
    />
  );
};

export default CustomDataGrid;

export * from "@mui/x-data-grid";

