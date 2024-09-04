import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

const Plans = () => {
  // const premiumFeatures = [
  //     "Unlimited access on the web and in our apps",
  //     "Unlimited Posts",
  //     "Get All Premium News",
  //     "Most comprehensive political and international coverage",
  //   ];

  //   const standardFeatures = [
  //     "Unlimited access on the web and in our apps",
  //     "24/7 live news updates",
  //     "Interactive stories",
  //     "political and international coverage",
  //   ];
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
  return (
    <div className=" flex items-center gap-12 my-24">
      <SubscriptionCard
        item={{ type: "Basic", features: basicPremium, price: 29, duration:{value: 1}, isNavigate: true }}
      />
      <SubscriptionCard
        item={{ type: "Premium", features: standardPremium, duration:{value: 1}, price: 399, isNavigate: true }}
      />
      <SubscriptionCard
        item={{ type: "Premium Plus", features: premiumPlus, duration:{value: 1}, price: 699, isNavigate: true }}
      />
    </div>
  );
};

export default Plans;
