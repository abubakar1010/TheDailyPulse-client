import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user, isLoading} = useContext(AuthContext)
    console.log(isLoading);
    
    const location = useLocation()

    if(isLoading) return <div className=" flex justify-center items-center h-screen"><Spinner className=" w-16 h-16" color="purple" /></div>

    if(user) return children

    return (
        <Navigate state={location.pathname} to={"/login"} replace ></Navigate>
    );
};

export default PrivateRoute;