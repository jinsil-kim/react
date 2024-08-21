import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";
import Icon from "./Icon";

const Topbar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center pt-4">
      <div style={{ width: "105px", height: "30px", marginLeft: "5px" }}>
        <img
          className="w-full h-full object-cover"
          src="https://blog.kakaocdn.net/dn/b5QczF/btrehC6dzmX/7VS9KZZIkBlYV2GKnuUGCK/img.png"
        />
      </div>
      <div className="mr-44">
        <IoIosArrowDown />
      </div>
      <div className="flex flex-row text-2xl gap-5">
        <FaRegHeart />
        <LiaTelegram />
      </div>
    </div>
  );
};

export default Topbar;
