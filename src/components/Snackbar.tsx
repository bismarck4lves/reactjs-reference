import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useToastContext } from "../contexts/ToastContext";

const autoHideDuration = 3000;

const Toast: React.FC = () => {
  const { open, message, error, closeToast } = useToastContext();
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeToast();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" color="primary" />
      </IconButton>
    </React.Fragment>
  );

  if (error) {
    return (
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default Toast;
