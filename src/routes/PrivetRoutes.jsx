import React, { Children, useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const { user } = useContext(AuthContext)
    const loaction = useLocation()
    console.log(loaction)
    
    if (user) {
        return children
    }

    return <Navigate state={{from:loaction}} to='/login' replace/>
};

export default PrivetRoutes;