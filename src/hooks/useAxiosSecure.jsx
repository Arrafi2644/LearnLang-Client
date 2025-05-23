import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://learn-lang-server-rose.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const {logout} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
        // console.log("error caught in interceptor ", error);

        if(error.status === 401 || error.status === 403){
            // console.log("need to logout this user");
            logout()
            .then(res => {
                 
                navigate("/login")
            })
            .catch(err => {
                console.log(err)
            })

        }
        return Promise.reject(error)
        })
    })

    return axiosInstance;
};

export default useAxiosSecure;