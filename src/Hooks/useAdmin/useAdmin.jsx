import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/useAuth";

import { Spinner } from "@material-tailwind/react";
import useAxiosSecure from "../useaxiosSecure/useaxiosSecure";

const useAdmin = () => {

    const {user, isLoading} = useAuth()
    const axiosSecure =  useAxiosSecure()
    console.log(user);
    

    const {data:isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() => {
            if(isLoading) return <div className=" flex justify-center items-center h-screen"><Spinner className=" w-16 h-16" color="purple" /></div>
            const result = await axiosSecure.get(`/users/admin/${user?.email}`)            
            return result.data?.admin
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;