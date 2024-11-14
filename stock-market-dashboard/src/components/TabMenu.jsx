import { useState } from "react";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("Chart");

  const tabs = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];

  return (
    <div className="border-b border-gray-200 mt-4">
      <ul className="flex space-x-10">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer pb-1 font-semibold text-sm ${
              activeTab === tab
                ? "text-black border-b border-blueBorder border-b-2"
                : "text-graytext"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabMenu;
