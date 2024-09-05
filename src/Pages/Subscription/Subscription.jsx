// import React from 'react';

import { useState } from "react";
import SubscriptionBanner from "../../Components/SubscriptionBanner/SubscriptionBanner";
import SubscriptionCard from "../../Components/SubscriptionCard/SubscriptionCard";
import Select from "react-select";
import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const Subscription = () => {
  const basicPremium = [
    "Ad-Free Reading",
    "Early Access to Articles",
    "Personalized News Feed",
  ];
  const standardPremium = [
    "All Basic Features",
    "Exclusive In-Depth Reports",
    "Offline Reading",
  ];
  const premiumPlus = [
    "All Standard Features",
    "Priority Customer Support",
    "Invitations to Webinars and Events",
    "Customizable Alerts",
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
          <Helmet>
        <title>Subscription | The Daily Pulse </title>
      </Helmet>
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
      <div className=" my-12 lg:flex md:grid md:grid-cols-2 justify-center items-center gap-12 lg:gap-24 ">

         <SubscriptionCard
        item={{ type: "Basic", price: 29, features: basicPremium, duration, isNavigate: false }}
      />
      <SubscriptionCard
        item={{ type: "Premium", price: 299, features: standardPremium, duration, isNavigate: false }}
      />
      <SubscriptionCard
        item={{ type: "Premium Plus", price: 699, features: premiumPlus, duration, isNavigate: false }}
      />
      </div>
    </>
  );
};

export default Subscription;
