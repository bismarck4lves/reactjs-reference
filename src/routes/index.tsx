import SingInPage from "pages/auth/SingIn";
import Equipes from "pages/Equipes";
import NotFound from "pages/NotFound";
import TurnosPage from "pages/Turnos";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import UnProtected from "./UnProtected";
import views from "./views";
const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<UnProtected />}>
        <Route index element={<SingInPage />} />
      </Route>
      <Route element={<Protected />}>
        <Route path="/home" element={<h1> Home </h1>} />
      </Route>
      <Route path={views.equipes} element={<Equipes />} />
      <Route path={views.turnos} element={<TurnosPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
