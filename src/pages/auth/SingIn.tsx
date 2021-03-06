import AuthContainer from "containers/AuthContainer";
import SingIn from "features/auth/SingIn";
import React from "react";

const SingInPage: React.FC = () => {
  return (
  <AuthContainer>
    <SingIn />
  </AuthContainer>
)};

export default SingInPage;
