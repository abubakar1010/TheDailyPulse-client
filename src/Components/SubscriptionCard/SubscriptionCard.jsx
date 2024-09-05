import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
const SubscriptionCard = ({ item }) => {
  const { type, features, duration = 2, isNavigate = false, price } = item;
  console.log(item);

  return (
    <div className=" lg:my-24 flex justify-center items-center w-full">
      <Card
        color="gray"
        variant="gradient"
        className="w-full max-w-[20rem] p-8  !to-[#180161]"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {type}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>
            {price * duration.value}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0 min-h-[170px]">
          <ul className="flex flex-col gap-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-green-600 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">{item}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          {isNavigate ? (
            <Link to={"/subscription"}>
              <Button
                size="lg"
                color="white"
                className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Subscribe Now
              </Button>
            </Link>
          ) : (
            <Link to={"/payment"}>
            <Button
              size="lg"
              color="white"
              className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Subscribe Now
            </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

SubscriptionCard.propTypes = {
  item: PropTypes.object,
};

export default SubscriptionCard;
