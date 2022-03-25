import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import React from "react";

const Button: React.FC<LoadingButtonProps> = ({
  variant = "contained",
  ...rest
}) => <LoadingButton variant={variant} {...rest} />;

export default Button;
