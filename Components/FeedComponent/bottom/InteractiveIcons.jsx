import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Icon from "../../Icon";
import { LiaTelegram } from "react-icons/lia";
import { FiMessageCircle } from "react-icons/fi";

const InteractiveIcons = () => {
  return (
    <div className="flex flex-row items-center justify-between text-xl">
      <div className="flex items-center gap-2">
        <FaRegHeart />
        <FiMessageCircle />
        <LiaTelegram />
      </div>
      <div>
        <HiOutlineDotsHorizontal />
      </div>
      <div>
        <Icon IconComponent={RiBookmarkLine}></Icon>
      </div>
    </div>
  );
};

export default InteractiveIcons;
