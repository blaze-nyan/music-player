import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
const Like = () => {
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    setIsLike((prevState) => !prevState);
  };
  return (
    <button onClick={handleLike} className="size-5 absolute right-5 top-3">
      {isLike ? (
        <IoMdHeart className="text-red-600 text-[1.5rem]" />
      ) : (
        <IoIosHeartEmpty className="text-[1.5rem]" />
      )}
    </button>
  );
};

export default Like;
