import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import Actions from "./Actions";

interface BooleanActionProps {
  resolveMsg?: string;
  rejectMsg?: string;
  rejectDisabled?: boolean;
  resolveDisabled?: boolean;
  rejectLoading?: boolean;
  resolveLoading?: boolean;
  onResolve: () => void;
  onReject: () => void;
}

const BooleanAction: React.FC<BooleanActionProps> = ({
  resolveMsg = "Sim",
  rejectMsg = "Não",
  rejectLoading,
  resolveLoading,
  rejectDisabled,
  resolveDisabled,
  onResolve,
  onReject,
}) => {
  return (
    <Actions>
      <LoadingButton
        variant="text"
        onClick={onReject}
        loading={rejectLoading}
        disabled={rejectDisabled}
      >
        {rejectMsg}
      </LoadingButton>
      <LoadingButton
        variant="contained"
        onClick={onResolve}
        loading={resolveLoading}
        disabled={resolveDisabled}
      >
        {resolveMsg}
      </LoadingButton>
    </Actions>
  );
};

export default BooleanAction;
