import { Avatar } from "@material-tailwind/react";
import useNews from "../../Hooks/UseNews/useNews";
import { Link } from "react-router-dom";


const Sponsored = () => {

    const [news] = useNews()
    console.log(news);
    
    return (
        <div>
            <div className=" mt-24 mb-12">
        <h1 className=" text-3xl text-center font-medium text-[#0000009f]">
        Sponsored Content
        </h1>

        <div className=" grid lg:gap-x-9 my-24 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full ">
            {
                news.slice(news.length - 7,news.length).map( item => <div className=" flex gap-4 " key={item.id}>
                    <Avatar
            variant="square"
            size="xxl"
            alt="tania andrew"
            className="cursor-pointer"
            src={item?.image}
          />
          <div>
          <Link to={`articleDetails/${item._id}`}><p className=" hover:underline text-[#000000c3] text-wrap">{item?.title}</p></Link>
          <p className=" text-[#5a57578f] mt-3">Sponsored By {item?.publisher} </p>
          </div>
                </div>)
            }
        </div>
      </div>
        </div>
    );
};

export default Sponsored;