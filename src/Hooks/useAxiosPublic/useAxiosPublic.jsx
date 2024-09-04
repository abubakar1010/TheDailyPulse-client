import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://the-daily-pulse-server-six.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;