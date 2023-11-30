import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {

    const axiosPublic = useAxiosPublic();
    const { data: user = [], isPending: loading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    return [user, loading, refetch]
};

export default useUsers;