import { useLoaderData } from "react-router-dom";
import ArticleDetailsCard from "../../Components/ArticleDetailsCard/ArticleDetailsCard";


const ArticleDetails = () => {

    const data = useLoaderData()
    console.log(data);
    

    return (
        <div>
            <ArticleDetailsCard item={data} />
        </div>
    );
};

export default ArticleDetails;