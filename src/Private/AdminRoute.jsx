import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/useAuth";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import { Spinner } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    // console.log(isLoading);
    
    const location = useLocation()

    if(isLoading || isAdminLoading) return <div className=" flex justify-center items-center h-screen"><Spinner className=" w-16 h-16" color="purple" /></div>

    console.log(user, isAdmin);
    

    if(user && isAdmin) return children

    return (
        <Navigate state={location.pathname} to={"/login"} replace ></Navigate>
    );
};

export default AdminRoute;