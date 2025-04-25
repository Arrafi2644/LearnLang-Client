import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTutors = (sort, search, category) => {
    console.log("sort koren", sort);
    console.log("search", search);
    console.log("Category", category)
    const axiosSecure = useAxiosSecure()
    const {data:tutors=[], isLoading, refetch} = useQuery({
        queryKey: ["tutors", sort, search, category],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/tutors?sort=${sort}&search=${search}&category=${category}`)
            return res.data;
        }
    })
    return [tutors, isLoading, refetch]
};

export default useTutors;