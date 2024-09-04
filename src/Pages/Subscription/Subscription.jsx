// import React from 'react';

import { useState } from "react";
import SubscriptionBanner from "../../Components/SubscriptionBanner/SubscriptionBanner";
import SubscriptionCard from "../../Components/SubscriptionCard/SubscriptionCard";
import Select from "react-select";
import { Typography } from "@material-tailwind/react";

const Subscription = () => {
  const premiumFeatures = [
    "Unlimited access on the web and in our apps",
    "Unlimited Posts",
    "Get All Premium News",
    "Most comprehensive political and international coverage",
  ];

  const standardFeatures = [
    "Unlimited access on the web and in our apps",
    "24/7 live news updates",
    "Interactive stories",
    "political and international coverage",
  ];

  const [duration, setDuration] = useState({ value: 1 });
  console.log(duration);
  

  const durations = [
    { value: 1, label: "1 min" },
    { value: 5, label: "5 day" },
    { value: 10, label: "10 day" },
  ];

  return (
    <>
      <SubscriptionBanner />

      <div>
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Subscription Duration
        </Typography>
        <Select
          placeholder="Subscription Durations"
          defaultValue={duration}
          onChange={setDuration}
          options={durations}
        />
      </div>
      <div className=" flex justify-center items-center gap-24 ">
        <SubscriptionCard
          item={{ type: "standard", features: standardFeatures, duration }}
        />
        <SubscriptionCard
          item={{ type: "premium", features: premiumFeatures, duration }}
        />
      </div>
    </>
  );
};

export default Subscription;
