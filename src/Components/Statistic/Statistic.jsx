import CountUp from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

const Statistic = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [], isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosPublic.get("/length");
      return result.data;
    },
  });

  console.log(users);

  if (isFetching)
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Spinner color="purple" className=" w-16 h-16"></Spinner>
      </div>
    );

  return (
    <div>
      <div className=" mt-40 mb-12">
        <h1 className=" text-3xl text-center font-medium text-[#0000009f]">
        User Statistics Overview
        </h1>
        <p className="text-lg text-center mt-4 font-medium text-[#0000009f]">
        View a snapshot of user engagement with key metrics. Analyze these figures to gauge platform growth and user distribution, helping you make data-driven decisions for user management and service improvements.
            </p>
      </div>

      <div className=" flex justify-center items-center my-24">
        <div className=" bg-gradient-to-r from-[#dc02ce] via-[#7c3ff2] to-[#5c53fe] text-white text-3xl font-bold max-w-[1350px] flex gap-12 py-24 px-12 text-center ">
          <div className=" space-y-3">
            <CountUp enableScrollSpy={true} end={users.totalUsers} />
            <p>Total Users</p>
          </div>
          <div className=" space-y-3 border-x-[2px] border-[#ffffff33] px-8">
            <CountUp enableScrollSpy={true} end={users.normalUsers} />
            <p>Normal Users</p>
          </div>
          <div className=" space-y-3">
            <CountUp enableScrollSpy={true} end={users.premiumUsers} />
            <p>Premium Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
