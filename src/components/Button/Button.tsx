import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import React from "react";

const Button: React.FC<LoadingButtonProps> = ({
  variant = "contained",
  type="button",
  ...rest
}) => <LoadingButton variant={variant} {...rest} type={type} />;

export default Button;
