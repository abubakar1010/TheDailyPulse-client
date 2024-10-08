import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Profile from "../../../Components/Profile/Profile";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../../Hooks/UseAuth/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user } = useAuth()
  const [isAdmin] = useAdmin()

  // console.log(user);

  const axiosPublic = useAxiosPublic()
  const [ isPremium, setIsPremium] = useState(false)

  useEffect(() => {

      
    axiosPublic.get(`/premiumUser/${user?.email}`)
    .then( res => {
      setIsPremium(res.data.isPremium)
    }).catch( (error) => {
      console.log(error);
       
    })
  
  },[axiosPublic, user?.email])
  

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">


      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
      >
        Home
      </NavLink>

      {user?.email && <NavLink
        to={"/addArticles"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
      >
        Add Articles
      </NavLink>}

      <NavLink
        to={"/allArticle"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
      >
        All Articles
      </NavLink>

      {user?.email && <NavLink
        to={"/subscription"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
      >
        Subscription
      </NavLink>}

      {user?.email && <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
        to={`/myArticles`}
      >
        My Articles
      </NavLink>}

      {isAdmin && <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
        to={"/dashboard"}
      >
        DashBoard
      </NavLink>}

      { isPremium && <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        }
        to={"/premiumArticles"}
      >
         Premium Articles
      </NavLink>}



      {user?.email ? <Profile /> : <NavLink className={({ isActive }) =>
          isActive
            ? "flex items-center border-b py-1 px-4 border-[#EB3678] shadow-none  hover:duration-300 duration-300 font-medium"
            : "flex items-center text-[#222121] hover:text-[#EB3678] hover:border-b hover:border-[#EB3678] hover:duration-300 duration-300 font-bold"
        } to={"/login"}>Login</NavLink>}
    </ul>
  );
  return (
    <>
      <div className="  ">
        <Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between ">
            <Typography
              as="p"
              
              className="mr-4 text-[#222121] cursor-pointer py-1.5 font-medium"
            >
              <Link to={"/"}>
              The Daily Pulse
              </Link>
            </Typography>
            <div className="flex items-center gap-4 z-20">
              <div className=" text-[#222121] mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="  ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                
                {openNav ? (
                  <MdOutlineCancel className="text-black text-2xl" />
                ) : (
                  <GiHamburgerMenu className="text-black text-2xl" />
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>{navList}</Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;

