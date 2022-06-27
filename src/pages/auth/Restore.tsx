import AuthContainer from "containers/AuthContainer";
import Restore from "features/auth/Restore";
import { RestoreProvider } from "features/auth/Restore/Context";
import React from "react";

const RestorePage: React.FC = () => {
  return (
    <AuthContainer formTitle="Redefinição de senha">
      <RestoreProvider>
        <Restore />
      </RestoreProvider>
    </AuthContainer>
  );
};

export default RestorePage;
