import MarketListCard from "./MarketListCard";
import { IMGS } from "../resources";
import { useState } from "react";

const MarketList = () => {
  const marketListData = () => {
    return [
      {
        name: "Google",
        code: "GLE",
        value: +43.11,
        icon: <img src={IMGS.GOOGLE} alt="Google" />,
      },
      {
        name: "Amazon",
        code: "AMZN",
        value: +39.11,
        icon: <img src={IMGS.AMAZON} alt="Amazon" />,
      },
      {
        name: "Reddit",
        code: "RDT",
        value: +38.11,
        icon: <img src={IMGS.REDDIT} alt="Reddit" />,
      },
      {
        name: "Airbnb",
        code: "ABNB",
        value: -7.12,
        icon: <img src={IMGS.AIRBNB} alt="Airbnb" />,
      },
      {
        name: "Paypal",
        code: "PYPL",
        value: +36.11,
        icon: <img src={IMGS.PAYPAL} alt="Paypal" />,
      },
      {
        name: "Netflix",
        code: "NFLX",
        value: +35.11,
        icon: <img src={IMGS.NETFLIX} alt="Netflix" />,
      },
    ];
  };

  const [marketList, setMarketList] = useState(marketListData());
  return (
    <div className="w-[28%] bg-white border-lightgray border-2 px-4 py-3 rounded-2xl">
      <div className="text-left text-lg font-semibold ">Market</div>

      {marketList.map((item, key) => {
        return (
          <div
            key={key}
            className={
              key === marketList.length - 1 ? "" : "border-b border-gray-200 "
            }
          >
            <MarketListCard
              icon={item.icon}
              code={item.code}
              name={item.name}
              value={item.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MarketList;
