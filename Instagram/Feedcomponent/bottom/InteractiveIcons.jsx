import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LiaBookmarkSolid, LiaTelegram } from "react-icons/lia";

const InteractiveIcons = () => {
  const [isLike, setisLike] = useState(0);
  const changeLike = () => {
    setisLike(isLike + 1);
  };
  const [chat, setchat] = useState(0);

  return (
    <div>
      <div className="flex px-1.5 py-4 gap-2 items-center">
        <div className="flex items-center gap-1 text-xl">
          <FaRegHeart onClick={changeLike} />
          {isLike}
        </div>
        <div className="flex items-center gap-1 text-xl">
          <IoChatbubbleOutline
            onClick={() => {
              setchat(chat + 1);
            }}
          />
          {chat}
        </div>
        <div className="text-2xl">
          <LiaTelegram />
        </div>
        <div className="flex flex-1 justify-center text-xl">
          <BsThreeDots />
        </div>
        <div className="flex flex-1 justify-end text-2xl">
          <LiaBookmarkSolid />
        </div>
      </div>
    </div>
  );
};

export default InteractiveIcons;
