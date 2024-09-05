import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
import { FaBook, FaLeanpub } from "react-icons/fa";
import {  FaUsers } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import useAdmin from "../../Hooks/useAdmin/useAdmin";
// import { TbBrandBooking } from "react-icons/tb";

const DashboardDrawer = () => {


  // const [isAdmin] = useAdmin()


    return (
        <>

      <Drawer overlay={false} open={true} >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            The Daily Pulse
          </Typography>
          
        </div>
        <List>

            <NavLink to={"/"}>
          <ListItem>
            <ListItemPrefix>
            <IoIosHome className=" text-xl" />
            </ListItemPrefix>
              HOME
          </ListItem>
          </NavLink>
            <NavLink to={"/dashboard"}>
          <ListItem>
            <ListItemPrefix>
            <MdSpaceDashboard className=" text-xl" />
            </ListItemPrefix>
              DASHBOARD
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
          <NavLink to={"/dashboard/addPublisher"}>
          <ListItem>
            <ListItemPrefix>
            <FaLeanpub className=" text-xl" />
            </ListItemPrefix>
            ADD PUBLISHER
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/allArticles"}>
          <ListItem>
            <ListItemPrefix>
            <FaBook className=" text-xl" />
            </ListItemPrefix>
            ALL ARTICLE
          </ListItem>
          </NavLink>
          
            


          
        </List>
      </Drawer>
    </>
    );
};

export default DashboardDrawer;


 

 
