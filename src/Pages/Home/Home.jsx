import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Plans from "../../Components/Plans/Plans";
import PublisherSlide from "../../Components/PublisherSlide/PublisherSlide";
import Sponsored from "../../Components/Sponsored/Sponsored";
import Statistic from "../../Components/Statistic/Statistic";
import TrendingArticles from "../../Components/TrendingArticles/TrendingArticles";


const Home = () => {
    console.log(import.meta.env.VITE_IMAGE_HOISTING_KEY);
    
    return (
        <div>
                  <Helmet>
        <title>Home | The Daily Pulse </title>
      </Helmet>
            <Banner />
            <TrendingArticles />
            <PublisherSlide /> 
            <Statistic />
            <Plans />
            <Sponsored />
        </div>
    );
};

export default Home;