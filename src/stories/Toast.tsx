import { Stack } from "@mui/material";
import React from "react";
import { Button } from "../components/Button";
import { useToastContext } from "../contexts/ToastContext";
import Container from "./StorieContainer";

const Toast: React.FC = () => {
  const { errorToast, openToast } = useToastContext();
  return (
    <Container title="Toast"> 
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => {
          openToast("Este é um Toast simples");
        }}
      >
        Simple Toast
      </Button>
      <Button
        onClick={() => {
          errorToast("Este é um toast com erro");
        }}
      >
        Error Toast
      </Button>
    </Stack>
    </Container>
  );
};

export default Toast;
