import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TrendingCard from "../TrendingCard/TrendingCard";
import { Spinner } from "@material-tailwind/react";

const TrendingArticles = () => {

    const axiosPublic =  useAxiosPublic()

    const { data: news = [], isFetching } = useQuery({
        queryKey: ["news"],
        queryFn: async () => {
          const result = await axiosPublic.get("/trendingNews");
          return result.data;
        },
      });

      if(isFetching) return <div className=" h-screen w-full flex justify-center items-center"><Spinner color="purple" className=" w-16 h-16"></Spinner></div>

    return (
        <div>
            <div className=" mt-24 mb-12">
        <h1 className=" text-3xl text-center font-medium text-[#0000009f]">
        Hot Topics & Trending News
        </h1>
        <p className="text-lg text-center mt-4 font-medium text-[#0000009f]">
        Stay updated with the latest and most popular news stories. This section showcases trending articles, allowing you to easily access and manage content that captures current interest and engagement. Keep your audience informed with the most relevant and impactful news.
            </p>
      </div>
            <div className=" grid grid-cols-3 gap-12 justify-center items-center mb-24 w-full h-full ">
            {
                news.map( (item) => <TrendingCard key={item._id} item={item} isTrending={"!flex-col !w-full !min-h-full"} />)
            }
        </div>
        </div>
    );
};

export default TrendingArticles;