import { Stack } from "@mui/material";
import { Button } from "components/Button";
import Dialog from "components/Dialog";
import Typography from "components/Typography";
import React from "react";
import MulherSentada from "vetors/mulher-sentada";
import { DataCRUDProps } from "./dataCrud_d";

const DataCrudFromModalSuccess: React.FC<DataCRUDProps> = (props) => {
  return (
    <Dialog open={props.successDialogFrom}>
      <Dialog.Content>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <MulherSentada />
          <Typography weight="700">{props.successDialogFromMessage}</Typography>
        </Stack>
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          variant="text"
          onClick={() => {
            props.setSuccessDialogFrom(false);
          }}
        >
          Fechar
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default DataCrudFromModalSuccess;
