import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Plans from "../../Components/Plans/Plans";
import PublisherSlide from "../../Components/PublisherSlide/PublisherSlide";
import Sponsored from "../../Components/Sponsored/Sponsored";
import Statistic from "../../Components/Statistic/Statistic";
import TrendingArticles from "../../Components/TrendingArticles/TrendingArticles";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //   console.log(import.meta.env.VITE_IMAGE_HOISTING_KEY);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    setTimeout(() => {
        setOpen(true)
    }, 1000);
  } ,[])

  return (
    <div>
      <Helmet>
        <title>Home | The Daily Pulse </title>
      </Helmet>
      <div>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Unlock Exclusive Access with Our Premium Membership!</DialogHeader>
          <DialogBody>
          Join our premium community and elevate your experience! Get access to exclusive features, personalized content, priority support, and more. Choose the plan that fits your needs and start enjoying all the perks today!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 "
            >
              <span>Cancel</span>
            </Button>
            <Link to={"/subscription"}>
            <Button className="bg-gradient-to-r from-[#EB3678] to-[#FB773C]  py-2 px-5 font-bold text-lg rounded-md " variant="gradient" onClick={handleOpen}>
              <span>Subscribe</span>
            </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </div>
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
