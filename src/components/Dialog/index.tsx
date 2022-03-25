import Dialog, { DialogProps } from "@mui/material/Dialog";
import React from "react";
import Actions from "./Actions";
import BooleanAction from "./BooleanAction";
import SimpleContent from "./SimpleContent";
import Title from "./Title";
import Transition from './Transition';
import { CustomTransitionProps } from "./types_d";

interface CustomDialogProps extends DialogProps, CustomTransitionProps {
  width?: number;
}

type CustomDialogType = React.FC<CustomDialogProps> & {
  Title: typeof Title;
  Content: typeof SimpleContent;
  Actions: typeof Actions;
  BooleanAction: typeof BooleanAction;
};

const CustomDialog: CustomDialogType = (props) => {

  return (
    <Dialog
      TransitionComponent={Transition}
      {...props}
    >
      {props.children}
    </Dialog>
  );
};

CustomDialog.Title = Title;
CustomDialog.Content = SimpleContent;
CustomDialog.Actions = Actions;
CustomDialog.BooleanAction = BooleanAction;

export default CustomDialog;
