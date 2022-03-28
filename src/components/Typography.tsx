import MuiTypography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

const sizes = {
  minimun: "0.56rem", //9px
  xxs: "0.62rem", //10px
  txs: "0.625rem", //12px
  small: "0.87rem", //14px
  xl: "1.25rem", //20px
  xxl: "1.37rem", //22px
  display: "1.5rem", // 24px
};

interface CustomTypographyProps extends TypographyProps {
  size?: keyof typeof sizes;
  weight?: "400" | "700"
}
const Typography: React.FC<CustomTypographyProps> = ({size, weight, ...rest}) => {
  return <MuiTypography fontSize={sizes[size]} fontWeight={weight} {...rest} />;
};

export default Typography;
