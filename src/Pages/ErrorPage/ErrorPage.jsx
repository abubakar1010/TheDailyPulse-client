import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
         <Helmet>
        <title>ErrorPage | The Daily Pulse</title>
      </Helmet>
        <div className=" bg-[url('https://i.ibb.co/NjY3CnV/error.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat ">
            
                <div className=" w-full text-center pb-12 flex justify-center items-end h-full">
                  <Link to={"/"}>
                    <button className="  px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]">Go Home</button>
                  </Link>
                </div>
              
            </div>
          
        </>
    );
};

export default ErrorPage;