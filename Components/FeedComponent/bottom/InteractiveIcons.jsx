import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { RiBookmarkLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

const InteractiveIcons = () => {
  const [isLike, setisLike] = useState(false);

  const test = () => {
    setisLike(!isLike);
    // 숫자 하나 올리기
  };

  return (
    <div className="flex flex-row items-center justify-between text-2xl p-2">
      <div className="flex flex-1 items-center gap-2 ">
        {isLike ? (
          <FaHeart style={{ color: "red" }} onClick={test} />
        ) : (
          <FaRegHeart onClick={test} />
        )}

        <FiMessageCircle />
        <LiaTelegram />
      </div>
      <div className="flex-1 flex justify-center">
        <HiOutlineDotsHorizontal />
      </div>
      <div className="flex-1 flex justify-end">
        <RiBookmarkLine />
      </div>
    </div>
  );
};

export default InteractiveIcons;
