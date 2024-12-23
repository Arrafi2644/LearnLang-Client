import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    const AuthContextHook = useContext(AuthContext)
    return AuthContextHook ;
};

export default useAuth;