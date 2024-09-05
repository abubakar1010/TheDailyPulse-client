import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MdWorkspacePremium } from "react-icons/md";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCard = ({ item }) => {
  // console.log(item);

  const { _id, image, title, publisher, description, subscription } = item;
  return (
    <>
      <div>
        <Card
          className={`w-full max-w-[48rem] flex md:h-[800px] xl:h-[740px]`}
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0  shrink-0 "
          >
            <img src={image} className="h-[400px] w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className=" flex items-center justify-between pb-4 ">
            <Typography variant="h6" color="gray" className=" uppercase">
              {publisher}
            </Typography>
            {
              subscription && <div className=" text-4xl text-[#ff8400] flex items-center ">
              <p className=" text-2xl">premium</p>
              <MdWorkspacePremium />
            </div>
            }
            </div>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title.slice(0, 80)} .....
            </Typography>
            <Typography color="gray" className="mb-8 font-normal ">
              {description.slice(0, 200)} ........
            </Typography>
            <Link to={`/articleDetails/${_id}`} className="inline-block">
              <Button variant="text" className="flex items-center gap-2 bg-gradient-to-r from-[#EB3678] to-[#FB773C] text-white">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

ArticleCard.propTypes = {
  item: PropTypes.object,
};

export default ArticleCard;
