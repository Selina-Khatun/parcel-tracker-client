import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://parcel-tracker-server.vercel.app/',
    withCredentials:true
})


const useAxiosSecure = () => {
    return axiosSecure ;
};

export default useAxiosSecure;

