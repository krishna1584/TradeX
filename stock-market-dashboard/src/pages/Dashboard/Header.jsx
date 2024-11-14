import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import IMGS from "../../resources/imgs";

const Header = () => {
  return (
    <div className="text-white px-4 mb-2 flex flex-row justify-between items-center">
      <div className="font-medium">
        <span className="text-blue">Trade</span>
        <span className="text-white">X</span>
      </div>
      <div className="flex flex-row gap-x-4 justify-between items-center">
        <div className="bg-lightgray rounded-full p-1 cursor-pointer">
          <IoMdNotificationsOutline size={20} color="black" />
        </div>
        <div className="bg-lightgray rounded-full p-1 cursor-pointer">
          <CiSettings size={20} color="black" />
        </div>
        <div className="rounded-full  cursor-pointer">
          <img src={IMGS.USER} alt="User" className="w-8 h-8 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
