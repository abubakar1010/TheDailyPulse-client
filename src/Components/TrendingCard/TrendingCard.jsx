import { MdWorkspacePremium } from "react-icons/md";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  import PropTypes from "prop-types";
  import { Link } from "react-router-dom";
  
  const TrendingCard = ({ item }) => {
    console.log(item);
  
    const { _id, image, title, publisher, description , subscription} = item;
    return (
      <>
        <div>
          <Card
            className={`w-full max-w-[48rem] flex  h-full`}
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full px-2 py-2 shrink-0 rounded-r-none"
            >
              <img src={image} className="min-h-[260px] rounded-md w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className=" flex justify-between items-center ">
              <Typography variant="h6" color="gray" className=" uppercase">
                {publisher}
              </Typography>
              {
              subscription && <div className=" text-4xl text-[#ff8400] flex items-center ">
              <p className=" text-xl">premium</p>
              <MdWorkspacePremium />
            </div>
            }
              </div>
              <Typography variant="h4" color="blue-gray" className="my-4">
                {title.slice(0, 20)} ......
              </Typography>
              <Typography color="gray" className="mb-8 font-normal ">
                {description.slice(0, 200)} ........
              </Typography>
              <Link to={`/articleDetails/${_id}`} className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
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
  
  TrendingCard.propTypes = {
    item: PropTypes.object,
  };
  
  export default TrendingCard;
  