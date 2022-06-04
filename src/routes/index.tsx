import SingInPage from "pages/auth/SingIn";
import NotFound from "pages/NotFound";
import ScalePage from "pages/scales";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import UnProtected from "./UnProtected";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<UnProtected />}>
        <Route index element={<SingInPage />} />
      </Route>

      <Route element={<Protected />}>
        <Route path="/home" element={<h1> Home </h1>} />
        <Route path="/scales" element={<ScalePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
