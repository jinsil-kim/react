import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineCameraAlt, MdOutlineLiveTv } from "react-icons/md";
import Icon from "./Icon";

const Header = () => {
  return (
    <div>
      <div className="w-full flex flex-row justify-between items-center bg-white ">
        <Icon IconComponent={MdOutlineCameraAlt}></Icon>
        <div
          style={{
            marginLeft: "50px",
            width: "105px",
            height: "30px",
          }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://blog.kakaocdn.net/dn/b5QczF/btrehC6dzmX/7VS9KZZIkBlYV2GKnuUGCK/img.png"
          />
        </div>
        <div className="flex flex-row relative ">
          <Icon IconComponent={MdOutlineLiveTv}></Icon>
          <Icon IconComponent={LiaTelegramPlane}></Icon>
        </div>
      </div>
    </div>
  );
};

export default Header;
