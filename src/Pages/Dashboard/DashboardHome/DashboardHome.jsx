import { Chart } from "react-google-charts";
import usePublisher from "../../../Hooks/usePublisher/usePublisher";
import GeoChart from "./GeoChart";
import { Helmet } from "react-helmet-async";

const DashboardHome = () => {
  const [publisher] = usePublisher();
  console.log(publisher);

  const value = publisher.reduce((acc, curr) => {
    // console.log(acc, curr);

    acc.push([curr.name, curr.totalNews]);

    return acc;
  }, []);

  const options = {
    title: "News Per Publisher",
    is3D: true,
  };

  value.unshift(["Total News", "News per Publisher"]);
  return (
    <>
          <Helmet>
        <title>Dashboard | The Daily Pulse </title>
      </Helmet>
      <div className=" w-full">
        <div className=" w-full">
          <div className=" my-24">
            <h1 className=" text-3xl text-center font-medium text-[#0000009f] mb-5 ">
              {" "}
              {"See a clear visual of our news publishers' contributions"}
            </h1>
            <p className="text-lg text-center font-medium text-[#0000009f]">
            Explore the contribution of each publisher to the latest updates, helping you stay informed with data-driven insights..
            </p>
          </div>

          <Chart
            chartType="PieChart"
            data={value}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className=" w-full">
          <GeoChart />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
