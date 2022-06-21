import { useAuthContext } from "contexts/AuthContext";
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import views from "./views";

const UnProtected:React.FC = () => {
    const [{isAuthenticated}] = useAuthContext()
    return isAuthenticated ? <Navigate to={views.importacao}/> :<Outlet/>
};

export default UnProtected;