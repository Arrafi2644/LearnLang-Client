import React from 'react';
import useAuth from '../hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    console.log(loading);
    if(loading){
        return <span className="loading loading-ring loading-lg  absolute left-1/2 -translate-x-1/2 top-14"></span>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;