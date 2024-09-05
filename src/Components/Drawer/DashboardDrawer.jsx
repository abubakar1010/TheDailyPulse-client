import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaBook, FaLeanpub } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import useAdmin from "../../Hooks/useAdmin/useAdmin";
// import { TbBrandBooking } from "react-icons/tb";

const DashboardDrawer = () => {
  // const [isAdmin] = useAdmin()
  const [open, setOpen] = useState(true);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div>
      <Button className=" lg:hidden block" onClick={openDrawer}>Open Drawer</Button>
        <Drawer open={open}  overlay={false}>
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="blue-gray">
              The Daily Pulse
            </Typography>
            <IconButton className=" lg:hidden block" variant="text" color="blue-gray" onClick={closeDrawer}>
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
          </IconButton>
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
      </div>
    </>
  );
};

export default DashboardDrawer;
