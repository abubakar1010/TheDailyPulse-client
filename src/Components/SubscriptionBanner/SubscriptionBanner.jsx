

const SubscriptionBanner = () => {
    return (
        <>
            <div className=" bg-[url('https://i.postimg.cc/Fz5Ryz1S/subscribe.jpg')] w-ful h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full  items-center bg-[#1d1d1d70] rounded-xl">
              <div className="text-white text-center pl-12">
                <h1 className=" text-6xl font-extrabold ">Experience</h1>
                <p className=" text-lg uppercase font-medium mt-5 mb-3">
                  The New Standard Of Luxury With Every Purchase
                </p>
                <button className="  bg-gradient-to-r from-[#EB3678] to-[#FB773C] mt-8 py-2 px-5 font-bold text-lg rounded-md ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </>
    );
};

export default SubscriptionBanner;