import React, { use } from 'react';
import { AuthContext } from '../Component/Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading}=use(AuthContext)

    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner text-neutral"></span>
    }

    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoutes;