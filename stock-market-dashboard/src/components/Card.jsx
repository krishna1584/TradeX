import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Card = (item) => {
  return (
    <div className="w-full bg-white border-lightgray border-2 p-3 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-x-3">
          <p className="bg-slate-100 rounded-md p-2">{item.icon}</p>
          <p>{item.title}</p>
        </div>
        <div className="flex items-center justify-center">
          {item.status === "positive" ? (
            <FaCaretUp color="blue" size={24} />
          ) : (
            <FaCaretDown color="red" size={24} />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-8">
        <div>
          <div className="text-xs">Current Value</div>
          <div className="text-2xl font-bold">{item.value}</div>
        </div>
        <div className="text-xs">
          <div>{item.code}</div>
          <div>
            {item.sign}
            {item.returns}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
