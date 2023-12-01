
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {
    const axiosPublic = useAxiosPublic();
        const { data: booking = [], isPending: loading, refetch } = useQuery({
            queryKey: ['booking'],
            queryFn: async () => {
                const res = await axiosPublic.get('/bookings');
                return res.data;
            }
        })
        return [booking, loading, refetch]
    };

export default useBooking;