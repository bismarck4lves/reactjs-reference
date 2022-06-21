import { Stack } from "@mui/material";
import Typography from "components/Typography";
import React from "react";
import LogoVector from "vetors/logoVector";

interface AuthContainerProps {
  formTitle: string
}
const AuthContainer: React.FC<AuthContainerProps> = ({ children, formTitle }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      style={{ height: "100vh" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="end"
        style={{
          border: "1px solid",
          width: "50%",
          height: "100%",
          background: "black",
        }}
      >
        <div style={{ padding: "150px" }}>
          <LogoVector />
        </div>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ width: "50%", height: "90%" }}
      >
        <div>
          <Typography size="giant" weight="700" align="center">
            {formTitle}
          </Typography>
          {children}
        </div>
      </Stack>
    </Stack>
  );
};

export default AuthContainer;
