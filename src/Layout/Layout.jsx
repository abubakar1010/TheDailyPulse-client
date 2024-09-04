import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {

    const location = useLocation()

    const isAutLayOut = location?.pathname?.includes('login') || location?.pathname?.includes('register')



    if(isAutLayOut) return <Outlet />
    

    return (
        <div>
            <NavBar />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Layout;