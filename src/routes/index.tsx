
import NotFound from "pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";


const Router: React.FC = () => {
  return (
      <Routes>
        <Route index element={<h1>Home page</h1>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
};

export default Router;
