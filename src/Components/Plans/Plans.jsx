import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

const Plans = () => {

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
    <div>
      <div className=" mt-40 mb-4">
        <h1 className=" text-3xl text-center font-medium text-[#0000009f]">
        Subscription Plans Overview
        </h1>
        <p className="text-lg text-center mt-4 font-medium text-[#0000009f]">
       {" View and manage the  distinct subscription plans offered on our platform. Access detailed information on each plan's features, pricing, and benefits."}
            </p>
      </div>
      <div className=" lg:flex grid grid-cols-1 md:grid-cols-2 items-center lg:gap-12 gap-6 lg:mb-24">
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
    </div>
  );
};

export default Plans;
