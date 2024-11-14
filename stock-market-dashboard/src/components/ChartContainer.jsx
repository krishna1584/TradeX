import { useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { stockData } from "../resources/data";
import TabMenu from "./TabMenu";
import TotalCount from "./TotalCount";

const ChartContainer = () => {
  const DAY = 24 * 3600 * 1000;
  const [options, setOptions] = useState({
    chartType: "line",
    navigator: false,
    toolbar: false,
    rangeButtons: true,
    volume: true,
    statusBar: false,
    zoom: true,
    data: stockData(),
    theme: {
      overrides: {
        common: {
          toolbar: {
            ranges: {
              enabled: true,
              buttons: [
                { label: "1d", value: 1 * DAY },
                { label: "3d", value: 3 * DAY },
                { label: "1w", value: 7 * DAY },
                { label: "1m", value: 30 * DAY },
                { label: "6m", value: 180 * DAY },
                { label: "1y", value: 365 * DAY },
                {
                  label: "max",
                  value: (start, end) => [start, end],
                  id: "All",
                },
              ],
              position: "top",
              align: "end",
            },
          },
          axes: {
            category: {
              label: {
                enabled: false, // Hides x-axis labels
              },
            },
            number: {
              label: {
                enabled: false, // Hides y-axis labels
              },
            },
          },
        },
      },
    },
  });

  return (
    <div className="w-[72%] bg-white border-lightgray border-2 p-3 rounded-2xl">
      <TotalCount
        value="63,171.79"
        status="+"
        return="42.03"
        percentage="3.49%"
      />
      <TabMenu />
      <div className="mt-4">
        <div className="flex flex-row items-center text-graytext gap-x-4 mb-4">
          <div className="flex flex-row items-center gap-x-2 hover:text-black cursor-pointer ">
            <BsArrowsAngleExpand size={16} />
            <span>Fullscreen</span>
          </div>
          <div className="flex flex-row items-center gap-x-2 hover:text-black cursor-pointer">
            <IoIosAddCircleOutline size={20} />
            <span>Compare</span>
          </div>
        </div>
        <AgFinancialCharts options={options} />
      </div>
    </div>
  );
};

export default ChartContainer;
