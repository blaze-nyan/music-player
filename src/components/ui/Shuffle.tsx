import { useState } from "react";
import { IoShuffle } from "react-icons/io5";

const Shuffle = () => {
  const [isShuffle, setIsShuffle] = useState(false);
  const handleShuffle = () => {
    setIsShuffle((prevState) => !prevState);
  };
  return (
    <button onClick={handleShuffle}>
      <IoShuffle
        className={isShuffle ? "text-[1.7rem] text-sky-500" : "text-[1.7rem]"}
      />
    </button>
  );
};

export default Shuffle;
