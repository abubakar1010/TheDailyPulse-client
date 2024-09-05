
import { Chart } from "react-google-charts";

const GeoChart = () => {

     const data = [
        ["Country", "Popularity"],
        ["Bangladesh", 800],
        ["India", 1200],
        ["Germany", 200],
        ["United States", 300],
        ["Pakistan", 600],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
        ["United Kingdom", 200]
      ];
      


    return (
        <div className=" w-full">

           <div className=" my-24">
           <h1 className=" text-3xl text-center font-medium text-[#0000009f] mb-5 "> Explore Our Global Presence</h1>
           <p className="text-lg text-center font-medium text-[#0000009f]" >Discover our footprint across the world with an interactive map showcasing our locations, services, and impact in different regions. Click on each marker to learn more about our offerings in that area.</p>
           </div>
            <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
        </div>
    );
};

export default GeoChart;




