import CardContainer from "../../components/CardContainer";
import ChartContainer from "../../components/ChartContainer";
import FrequencySelector from "../../components/FrequencySelector";
import MarketList from "../../components/MarketList";
import TotalCard from "../../components/TotalCard";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="bg-bggray rounded-lg w-full  p-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="text-xl text-black font-semibold">Overview</div>
          <FrequencySelector />
        </div>
        <div className="flex flex-row w-full justify-between gap-x-4 mt-4 ">
          <CardContainer />
          <TotalCard
            title="Total Holding"
            value="₹ 8,52,144.00"
            return_value="+1.54"
            return_percentage="0.89%"
          />
        </div>
        <div className="flex flex-row w-full justify-between gap-x-4 mt-4">
          <ChartContainer />
          <MarketList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
