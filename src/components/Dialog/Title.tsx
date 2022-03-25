import CloseIcon from "@mui/icons-material/Close";
import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import React from "react";


interface TitleProps extends DialogTitleProps {
  id?: string;
  closeButton?: () => void;
}
const Title: React.FC<TitleProps> = ({ children, closeButton, ...rest }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...rest}>
      {children}
      {closeButton ? (
        <IconButton
          aria-label="close"
          onClick={closeButton}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default Title;
