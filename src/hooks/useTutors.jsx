import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTutors = () => {
    const axiosSecure = useAxiosSecure()
    const {data:tutors=[], isLoading, refetch} = useQuery({
        queryKey: ["tutors"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/tutors")
            return res.data;
        }
    })
    return [tutors, isLoading, refetch]
};

export default useTutors;