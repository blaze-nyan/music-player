import { useState } from "react";
import { RxLoop } from "react-icons/rx";
const Loop = () => {
  const [isLoop, setIsLoop] = useState(false);
  const handleLoop = () => {
    setIsLoop((prevState) => !prevState);
  };
  return (
    <button onClick={handleLoop}>
      <RxLoop
        className={isLoop ? "text-[1.5rem] text-sky-500" : "text-[1.5rem]"}
      />
    </button>
  );
};

export default Loop;
