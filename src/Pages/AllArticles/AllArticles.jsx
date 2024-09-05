import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
} from "@material-tailwind/react";
import ArticleCard from "../../Components/articleCard/articleCard";
import usePublisher from "../../Hooks/usePublisher/usePublisher";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const AllArticles = () => {
  const [publisher] = usePublisher();
  const axiosPublic = useAxiosPublic()
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://the-daily-pulse-server-six.vercel.app/news/status")
      .then((res) => {
        setNews(res.data);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(news);
  

  const handleSearch = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    console.log(title);
    axiosPublic.get(`/news/title/${title}`).then((res) => setNews(res.data));

  };
  const searchByPublisher = (publisherName) => {

    axiosPublic.get(`/news/publisher/${publisherName}`).then((res) => setNews(res.data));

  };


  if (loader)
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Spinner color="purple" className=" w-16 h-16"></Spinner>
      </div>
    );

  return (
    <div>
      <div className=" my-24">
           <h1 className=" text-3xl text-center font-medium text-[#0000009f] mb-5 "> Manage All Articles</h1>
           <p className="text-lg text-center font-medium text-[#0000009f]" >Discover our footprint across the world with an interactive map showcasing our locations, services, and impact in different regions. Click on each marker to learn more about our offerings in that area.</p>
           </div>
      <form onSubmit={handleSearch} action="" className=" flex items-center justify-center gap-24 ">
        <div className="relative my-12  flex w-full max-w-[24rem]">
          <Input
            type="text"
            label="Search"
            name="title"
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            type="submit"
            size="sm"
            className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] !absolute right-1 top-1 rounded"
          >
            search
          </Button>
        </div>
        <div>
        <Menu placement="bottom">
          <MenuHandler>
            <Button className="bg-gradient-to-r from-[#EB3678] to-[#FB773C]">Filter</Button>
          </MenuHandler>
          <MenuList>
            {publisher.map((item) => (
              <MenuItem
                onClick={() => searchByPublisher(item.name)}
                key={item._id}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        </div>
      </form>


      <div className=" grid grid-cols-2 justify-center items-center my-12 gap-12">
        {news.map((item) => (
          <ArticleCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
