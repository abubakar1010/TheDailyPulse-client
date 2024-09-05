
import CountUp from 'react-countup';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@material-tailwind/react';

const Statistic = () => {


      const axiosPublic = useAxiosPublic()
    const { data: users = [], isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const result = await axiosPublic.get("/length");
          return result.data;
        },
      });

      console.log(users);

      if(isFetching) return <div className=" h-screen w-full flex justify-center items-center"><Spinner color="purple" className=" w-16 h-16"></Spinner></div>
      

    return (
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
    );
};

export default Statistic;