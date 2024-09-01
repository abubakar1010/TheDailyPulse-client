import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Badge,
} from "@material-tailwind/react";
import Profile from "../../../Components/Profile/Profile";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart/useCart";

const NavigationBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user } = useContext(AuthContext);
  const [cart] = useCart()

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>Contact Us</NavLink>
      <NavLink to={"/"}>Dashboard</NavLink>
      <NavLink to={"/menu"}>Our Menu</NavLink>
      <NavLink to={"/order/salad"}>Order Food</NavLink>
      <NavLink to={"/dashboard/cart"}>
        <Badge content={cart.length}>
        <FaCartShopping className="h-6 w-6 "  />
        </Badge>
      </NavLink>
      {user?.email ? <Profile /> : <NavLink to={"/login"}>Login</NavLink>}
    </ul>
  );
  return (
    <>
      <div className=" container mx-auto  ">
        <Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
          <div className="flex items-center justify-between ">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              The Daily Pulse
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
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

export default NavigationBar;
