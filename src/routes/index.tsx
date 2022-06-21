import SingInPage from "pages/auth/SingIn";
import Equipes from "pages/Equipes";
import ImportProducaoDiariaPage from "pages/ImportProducaoDiaria";
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
        <Route path={views.equipes} element={<Equipes />} />
        <Route path={views.turnos} element={<TurnosPage />} />
        <Route path={views.importacao} element={<ImportProducaoDiariaPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
