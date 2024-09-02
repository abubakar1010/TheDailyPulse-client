import {
    Card,
    Input,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../../Components/SocialLoign/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth/useAuth";
  
  const Login = () => {
  
    const {login} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [isError, setIsError] = useState(false);  
    const [isShowPassword, setIsShowPassword] = useState(false);
    
  
    const handleShowPassword = () => {
      setIsShowPassword(!isShowPassword);
    };
  
  
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const email = form.email.value;
      const password = form.password.value;
  
 
      login(email, password)
      .then( () => {
  
        Swal.fire({
          title: "Log in!",
          text: "You are successfully Log in!",
          icon: "success"
        });
  
        navigate( location?.state? location.state : '/')
  
      })
      .catch(() => {
        setIsError(true)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Log in failed. Something went wrong! ",
          footer: 'please try again'
        });
      })
  
    };
  
  
  
    return (
      <>
      <Helmet>
        <title>Login | The Daily Pulse </title>
      </Helmet>
      <div className=" flex justify-center items-center my-16">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 mb-7 font-normal">
            Nice to meet you! Enter your details to Login.
          </Typography>

          {isError && (
            <>
              <div className=" py-3 rounded-sm border border-[#FF5D64] text-center bg-[#ff5d651d] ">
                <h1 className=" mb-1 text-lg font-bold text-[#121212e6]">
                  Wrong credentials
                </h1>
                <p>Invalid username or password</p>
              </div>
            </>
          )}
          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                type="email"
                name="email"
                required
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className=" relative">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Password
                </Typography>
                <Input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  required
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div
                  onClick={handleShowPassword}
                  className="absolute top-[50px] right-6"
                >
                  {isShowPassword ? (
                    <FaEyeSlash className=" text-xl" />
                  ) : (
                    <FaEye className=" text-xl" />
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-[#ff0000] to-[#FF8938] w-full py-3 rounded-lg font-bold text-white text-xl"
            >
              sign In
            </button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              {`Don't have an account`}?{" "}
              <Link
                to={"/register"}
                className="font-medium text-[#ff5d64ed] hover:underline"
              >
                Create an account
              </Link>
            </Typography>
            <GoogleLogin />
          </form>
        </Card>
      </div>
    </>
    );
  };
  
  export default Login;
  