import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useContext, useEffect, useRef, useState } from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
  } from "react-simple-captcha";
  import { AuthContext } from "../../Provider/AuthProvider";
  import Swal from "sweetalert2";
  
  const Login = () => {
  
    const captchaRef = useRef(null)
    const [isDisabled, setIsDisabled] = useState(true);
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
  
    useEffect(() => {
      loadCaptchaEnginge(6);
    }, []);
  
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const email = form.email.value;
      const password = form.password.value;
  
      const userInfo = { email, password };
      console.log(userInfo);
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
        setIsDisabled(true)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Log in failed. Something went wrong! ",
          footer: 'please try again'
        });
      })
  
    };
  
    const handleCaptcha = () => {
      const user_captcha_value = captchaRef.current.value
      // console.log(user_captcha_value);
      if (validateCaptcha(user_captcha_value)) {
        setIsDisabled(false)
    }
      
    }
  
  
    return (
      <>
        <div className=" my-8 flex justify-center items-center">
        <Card className="" color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Log in
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Welcome Back! Enter your details to Login.
          </Typography>
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
                name="email"
                
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                name="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {
                isDisabled? <><Typography variant="h6" color="blue-gray" className="-mb-3">
                <LoadCanvasTemplate />
              </Typography>
              <input
              ref={captchaRef}
                type="text"
                size="lg"
                placeholder="Enter Captcha Value"
                className=" border-gray-500 border py-3 rounded-md px-3 outline-none"
                
              />
              <Button onClick={handleCaptcha}>Submit</Button></> : <p className=" text-lg my-2 text-center text-green-600">Matched</p>
              }
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              disabled={isDisabled}
              type="submit"
              className="mt-6"
              fullWidth
            >
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              {`Don't have an account?`}{" "}
              <Link to={"/register"} className="font-medium text-gray-900">
                Register
              </Link>
            </Typography>
          </form>
        </Card>
        </div>
      </>
    );
  };
  
  export default Login;
  