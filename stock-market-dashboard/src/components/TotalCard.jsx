const TotalCard = (item) => {
  return (
    <div className="w-[28%] bg-blueBg border-lightgray border-2 p-3 rounded-2xl">
      <div className="text-md font-medium text-white">{item.title}</div>
      <div className="mt-8">
        <div className="text-3xl font-bold text-white">{item.value}</div>
        <div className="text-xs font-medium text-white">
          Total Return{" "}
          <span className="ml-2">
            {item.return_value} ({item.return_percentage})
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
