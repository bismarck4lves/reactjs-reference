import { useAuthContext } from "contexts/AuthContext";
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const UnProtected:React.FC = () => {
    const [{isAuthenticated}] = useAuthContext()
    return isAuthenticated ? <Navigate to="/home"/> :<Outlet/>
};

export default UnProtected;