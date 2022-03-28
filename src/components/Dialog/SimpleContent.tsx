import { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DialogContent from "@mui/material/DialogContent";
import Typography from "components/Typography";
import React from "react";

interface SimpleContentProps extends CardProps {
  width?: number;
  height?: number;
}
const SimpleContent: React.FC<SimpleContentProps> = ({
  children
}) => {
  return (
    <DialogContent>
      <CardContent>
        <Typography size="medium">
          {children}
        </Typography>
      </CardContent>
    </DialogContent>
  );
};

export default SimpleContent;
