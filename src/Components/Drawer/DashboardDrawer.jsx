import {
    Drawer,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
import { FaBook, FaLeanpub } from "react-icons/fa";
import {  FaUsers } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import useAdmin from "../../Hooks/useAdmin/useAdmin";
// import { TbBrandBooking } from "react-icons/tb";

const DashboardDrawer = () => {


  // const [isAdmin] = useAdmin()


    return (
        <>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
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
        <Button className="mt-3 ml-5" size="sm">
          Documentation
        </Button>
      </Drawer>
    </>
    );
};

export default DashboardDrawer;


 

 
