const TotalCount = (item) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <span className="text-3xl font-bold">{item.value}</span>
        <span className="text-sm font-semibold text-graytext">
          <sup>USD</sup>
        </span>
      </div>
      <div className="text-green-500 text-sm">
        <span>
          {item.status} {item.return}
        </span>
        <span className="ml-1">({item.percentage})</span>
      </div>
    </>
  );
};

export default TotalCount;
