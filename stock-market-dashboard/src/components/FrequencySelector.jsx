import { useState } from "react";
const FrequencySelector = () => {
  const [frequency, setFrequency] = useState("Weekly");

  return (
    <div className="flex flex-row justify-between items-center bg-lightgray rounded-2xl text-sm">
      <div
        className={` ${
          frequency === "Weekly" ? "bg-black text-white rounded-2xl" : ""
        } py-1 px-4 cursor-pointer`}
        onClick={() => setFrequency("Weekly")}
      >
        Weekly
      </div>
      <div
        className={` ${
          frequency === "Monthly" ? "bg-black text-white rounded-2xl" : ""
        } py-1 px-4 cursor-pointer`}
        onClick={() => setFrequency("Monthly")}
      >
        Monthly
      </div>
      <div
        className={` ${
          frequency === "Annualy" ? "bg-black text-white rounded-2xl " : ""
        } py-1 px-4 cursor-pointer`}
        onClick={() => setFrequency("Annualy")}
      >
        Annualy
      </div>
    </div>
  );
};

export default FrequencySelector;
