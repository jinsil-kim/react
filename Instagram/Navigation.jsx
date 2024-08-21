import { BiMoviePlay } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { LuPlusSquare } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import Icon from "./Icon";
import Photo from "./PhotoComponent/Photo";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 max-w-sm w-full m-auto flex justify-between items-center bg-white">
      <Icon IconComponent={MdHomeFilled}></Icon>
      <Icon IconComponent={IoSearch}></Icon>
      <Icon IconComponent={LuPlusSquare}></Icon>
      <Icon IconComponent={BiMoviePlay}></Icon>
      <Photo size="small" />
    </div>
  );
};

export default Navigation;
