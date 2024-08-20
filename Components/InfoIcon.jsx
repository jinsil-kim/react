import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { RiBookmarkLine } from "react-icons/ri";
import Icon from "./Icon";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const InfoIcon = (props) => {
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

export default InfoIcon;
