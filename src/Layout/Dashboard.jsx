import { Outlet } from "react-router-dom";
import DashboardDrawer from "../Components/Drawer/DashboardDrawer";


const Dashboard = () => {
    return (
        <>
            <div className=" lg:flex">
            <div className=" min-w-[300px]">
            <DashboardDrawer />
            </div>
            <Outlet />
            </div>
        </>
    );
};

export default Dashboard;

