import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useNews from "../../Hooks/UseNews/useNews";
import { Button, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [news, loader] = useNews();

  console.log(news);

  if (loader)
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Spinner color="purple" className=" w-16 h-16"></Spinner>
      </div>
    );

  return (
    <Carousel
      className=""
      stopOnHover={true}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {news.map((item) => (
        <div
          key={item?._id}
          className=" w-full h-[500px] bg-cover  bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${item?.image}")` }}
        >
          <img src={`${item?.image}`} alt="" />

          <div className="legend py-12 ">
            <h1 className="mt-6">{item?.title}</h1>

            <Link to={`articleDetails/${item?._id}`}>
              <Button className=" my-6" color="purple">View Details</Button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
