const MarketListCard = (item) => {
  return (
    <div className="flex flex-row justify-between items-center my-3">
      <div className="w-[20%]">
        <div className="bg-slate-100 rounded-3xl p-2 w-[48px] h-[46px]">
          {item.icon}
        </div>
      </div>
      <div className="w-[60%]">
        <div className="font-semibold">{item.code}</div>
        <div className="text-xs text-graytext font-semibold mt-1">
          {item.name}
        </div>
      </div>
      <div className="w-[20%] text-right">
        <div className="text-xs text-graytext font-semibold">{item.code}</div>
        <div
          className={
            item.value > 0
              ? "text-xs font-semibold text-blue mt-1"
              : "text-xs font-semibold text-red-500 mt-1"
          }
        >
          {item.value > 0 ? "+" : ""}
          {item.value}
        </div>
      </div>
    </div>
  );
};

export default MarketListCard;
