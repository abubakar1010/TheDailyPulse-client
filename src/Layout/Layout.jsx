import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Layout = () => {

    const location = useLocation()

    const isAutLayOut = location?.pathname?.includes('login') || location?.pathname?.includes('register')



    if(isAutLayOut) return <Outlet />
    

    return (
        <div>
            <NavigationBar />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Layout;