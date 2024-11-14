import Card from "./Card";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTesla } from "react-icons/si";

const CardContainer = () => {
  return (
    <div className="flex flex-row w-[72%] gap-x-4 ">
      <Card
        icon={<FaApple />}
        title="Apple"
        status="positive"
        value="₹ 20,000.20"
        code="AAPL"
        sign="+"
        returns="30.0"
      />
      <Card
        icon={<FaXTwitter />}
        title="X(Twitter)"
        status="positive"
        value="₹ 20,000.20"
        code="AAPL"
        sign="+"
        returns="30.0"
      />
      <Card
        icon={<SiTesla />}
        title="Tesla"
        status="negative"
        value="₹ 20,000.20"
        code="AAPL"
        sign="+"
        returns="30.0"
      />
    </div>
  );
};

export default CardContainer;
