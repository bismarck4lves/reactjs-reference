import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import React from "react";

const Actions: React.FC = ({ children }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <DialogActions>{children}</DialogActions>
    </Stack>
  );
};

export default Actions;
