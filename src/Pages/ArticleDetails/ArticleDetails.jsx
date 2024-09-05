import { useLoaderData } from "react-router-dom";
import ArticleDetailsCard from "../../Components/ArticleDetailsCard/ArticleDetailsCard";
import { Helmet } from "react-helmet-async";

const ArticleDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Article Details | The Daily Pulse </title>
      </Helmet>
      <div>
        <ArticleDetailsCard item={data.result} />
      </div>
    </>
  );
};

export default ArticleDetails;
