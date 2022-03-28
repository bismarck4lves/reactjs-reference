import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack } from "@mui/material";
import { Button } from "components/Button";
import Typography from "components/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack spacing={2}>

        <Typography size="display">
            404 | Page not found
        </Typography>
        <Button variant="text" onClick={()=> {
          navigate("/")
        }}>
          <ArrowBackIcon/>
          Back to beginning </Button>
      </Stack>
    </Stack>
  );
};

export default NotFound;
