import { Spinner } from "@material-tailwind/react";
import ArticleCard from "../../Components/articleCard/articleCard";
import useNews from "../../Hooks/UseNews/useNews";


const AllArticles = () => {


    const [news, loader] = useNews()

    console.log(news);

    if(loader) return <div className=" h-screen w-full flex justify-center items-center"><Spinner color="purple" className=" w-16 h-16"></Spinner></div>
    

    return (
        <div className=" grid grid-cols-2 justify-center items-center my-12 gap-12">
            {
                news.map( (item) => <ArticleCard key={item?._id} item={item} />)
            }
        </div>
    );
};

export default AllArticles;