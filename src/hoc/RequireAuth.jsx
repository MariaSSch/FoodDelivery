import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



export default function RequireAuth({children}) {
    const location = useLocation();
    const isAuth = useSelector(state => state.auth.isAuth);

    if(!isAuth) {
        return <Navigate to="/app/aware" state={{from: location}} />
    }
  return children;
}

