import {
    Drawer,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
import { TbBrandBooking } from "react-icons/tb";
import { FaBook, FaCalendarAlt, FaShoppingBasket } from "react-icons/fa";
import { FaCcAmazonPay, FaEnvelope, FaListUl, FaUsers, FaUtensils } from "react-icons/fa6";
import { IoIosHome, IoMdCart } from "react-icons/io";
import { MdOutlineMenuBook, MdOutlineRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
// import { TbBrandBooking } from "react-icons/tb";

const DashboardDrawer = () => {


  const [isAdmin] = useAdmin()


    return (
        <>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer overlay={false} open={true} >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          {/* <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton> */}
        </div>
        <List>

          {
            isAdmin? <>
            <NavLink to={"/"}>
          <ListItem>
            <ListItemPrefix>
            <IoIosHome className=" text-xl" />
            </ListItemPrefix>
            ADMIN HOME
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/addItems"}>
          <ListItem>
            <ListItemPrefix>
            <FaUtensils className=" text-xl" />
            </ListItemPrefix>
            ADD ITEMS
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/manageItems"}>
          <ListItem>
            <ListItemPrefix>
            <FaListUl className=" text-xl" />
            </ListItemPrefix>
            MANAGE ITEMS
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/manageBookings"}>
          <ListItem>
            <ListItemPrefix>
            <FaBook className=" text-xl" />
            </ListItemPrefix>
            MANAGE BOOKINGS
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/allUsers"}>
          <ListItem>
            <ListItemPrefix>
            <FaUsers className=" text-xl" />
            </ListItemPrefix>
            ALL USER
          </ListItem>
          </NavLink>
            </> : <>
            {/* user Dashboard routes start here */}

          <NavLink to={"/"}>
          <ListItem>
            <ListItemPrefix>
            <IoIosHome className=" text-xl" />
            </ListItemPrefix>
            USER HOME
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/reservation"}>
          <ListItem>
            <ListItemPrefix>
            <FaCalendarAlt className=" text-xl" />
            </ListItemPrefix>
            RESERVATION
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/paymentHistory"}>
          <ListItem>
            <ListItemPrefix>
            <FaCcAmazonPay className=" text-xl" />
            </ListItemPrefix>
            PAYMENT HISTORY
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/cart"}>
          <ListItem>
            <ListItemPrefix>
            <IoMdCart className=" text-xl" />
            </ListItemPrefix>
            MY CART
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/addReview"}>
          <ListItem>
            <ListItemPrefix>
            <MdOutlineRateReview className=" text-xl" />
            </ListItemPrefix>
            ADD REVIEW
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/myBooking"}>
          <ListItem>
            <ListItemPrefix>
            <TbBrandBooking className=" text-xl" />
            </ListItemPrefix>
            MY BOOKING
          </ListItem>
          </NavLink>

          {/* user Dashboard routes  end here */}
            </>
          }

          <p className=" border-t-2 border-gray-700 w-[200px] my-4 "></p>

          {/* common routes starts here */}

        <NavLink to={"/"}>
        <ListItem>
            <ListItemPrefix>
            <IoIosHome className=" text-xl" />
            </ListItemPrefix>
            HOME
          </ListItem>
        </NavLink>
      <NavLink to={"/"}><ListItem>
            <ListItemPrefix>
            <FaEnvelope className=" text-xl" />
            </ListItemPrefix>
            CONTACT US
          </ListItem></NavLink>
      <NavLink to={"/menu"}><ListItem>
            <ListItemPrefix>
            <MdOutlineMenuBook className=" text-xl" />
            </ListItemPrefix>
            OUR MENU
          </ListItem></NavLink>
      <NavLink to={"/order/salad"}><ListItem>
            <ListItemPrefix>
            <FaShoppingBasket className=" text-xl" />
            </ListItemPrefix>
            ORDER FOOD
          </ListItem></NavLink>

          {/* common routes ed here */}

          
        </List>
        <Button className="mt-3 ml-5" size="sm">
          Documentation
        </Button>
      </Drawer>
    </>
    );
};

export default DashboardDrawer;


 

 
