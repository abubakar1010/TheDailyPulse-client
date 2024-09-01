import { Button } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/UseAuth/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {

    const {googleLogin} = useAuth()
    const axiosPublic =  useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
        .then( res => {
            console.log(res);
            const userInfo = { email: res.user?.email, name: res.user?.displayName}
            axiosPublic.post("/users", userInfo)
            .then( (res) => {
                console.log(res);
                navigate('/')
            })
        })
        .catch( error => {
            console.log(error);
            
        })
    }
    return (
        <div>
            <Button onClick={handleGoogleLogin} className=" flex gap-2 justify-center items-center">
                <FaGoogle />
                Google
            </Button>
        </div>
    );
};

export default GoogleLogin;