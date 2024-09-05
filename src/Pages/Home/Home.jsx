import Plans from "../../Components/Plans/Plans";
import PublisherSlide from "../../Components/PublisherSlide/PublisherSlide";
import Sponsored from "../../Components/Sponsored/Sponsored";
import Statistic from "../../Components/Statistic/Statistic";
import TrendingArticles from "../../Components/TrendingArticles/TrendingArticles";


const Home = () => {
    console.log(import.meta.env.VITE_IMAGE_HOISTING_KEY);
    
    return (
        <div>
            <TrendingArticles />
            <PublisherSlide /> 
            <Statistic />
            <Plans />
            <Sponsored />
        </div>
    );
};

export default Home;