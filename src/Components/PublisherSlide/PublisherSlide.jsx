import "swiper/css";
import "swiper/css/pagination";
import "./PublisherSlide.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import usePublisher from "../../Hooks/usePublisher/usePublisher";
import { Avatar, Spinner } from "@material-tailwind/react";

const PublisherSlide = () => {
  const [publisher, loader] = usePublisher();

  console.log(publisher);

  if (loader)
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Spinner color="purple" className=" w-16 h-16"></Spinner>
      </div>
    );

  return (
    <>
    <div>
        <h1 className=" text-[#0000009f] text-center mt-12 text-3xl font-bold">Our Publishers</h1>
        <p className="text-lg text-center mt-4 font-medium text-[#0000009f]">
        A comprehensive list of all publishers  on our platform. Access detailed information about each publisher, including their latest news and updates, and efficiently organize and update their profiles to ensure accurate and engaging content.
            </p>
    </div>
      <div className=" my-24">
      <Swiper

      slidesPerGroup={(publisher.length / 2)}

        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={false}
        loop={true}
        speed={5200}
        slidesPerView={3}
        new
        modules={[Autoplay]}
        className="PublisherSlide"
      >
        

        {publisher.map((element) => (
          <SwiperSlide key={element._id} >
            <div className=" flex items-center gap-4">
            <Avatar
            size="lg"
            variant="circular"
            alt="tania andrew"
            className="cursor-pointer"
            src={element.image}
          />
          <p className=" text-2xl font-bold text-[#3d3d3d]">{element.name}</p>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      </div>
    </>
  );
};

export default PublisherSlide;
