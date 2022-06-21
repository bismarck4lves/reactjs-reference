import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import SearchField from "@mui/material/TextField";
import { Button } from "components/Button";
import React from "react";
import { DataCRUDProps } from "./dataCrud_d";

const DataCrudHeader: React.FC<DataCRUDProps> = ({onClickNew}) => {

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      style={{ marginBottom: 20 }}
    >
      <div style={{ width: 500 }}>
        <SearchField
          style={{ width: "100%", background: "#EDF2F2" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button onClick={onClickNew}>+ Adicionar novo</Button>
    </Stack>
  );
};

export default DataCrudHeader;
