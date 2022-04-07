import { useAuthContext } from "contexts/AuthContext";
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const Protected:React.FC = () => {
    const [{isAuthenticated}] = useAuthContext()
    return isAuthenticated ? <Outlet/> : <Navigate to="/"/>
};

export default Protected;