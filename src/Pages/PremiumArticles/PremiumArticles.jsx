
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import TrendingCard from "../../Components/TrendingCard/TrendingCard";


const PremiumArticle = () => {

    const axiosPublic =  useAxiosPublic()

    const { data: news = [] } = useQuery({
        queryKey: ["news"],
        queryFn: async () => {
          const result = await axiosPublic.get("/news/premium");
          return result.data;
        },
      });

    return (
        <div className=" grid grid-cols-3 gap-12 justify-center items-center my-24 w-full h-full ">
            {
                news.map( (item) => <TrendingCard key={item._id} item={item} isTrending={"!flex-col !w-full !min-h-full"} />)
            }
        </div>
    );
};

export default PremiumArticle;