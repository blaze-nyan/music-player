import { IoIosArrowRoundBack } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="flex flex-row items-center px-7">
      <IoIosArrowRoundBack size="2.5rem" className="absolute" />
      <span className="font-medium text-xl m-auto">Playing Now</span>
    </div>
  );
};

export default TopBar;
