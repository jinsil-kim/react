import { CiHeart, CiSearch, CiSquarePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import Icon from "./Icon";
import Photo from "./Photocomponents/Photo";

const Navigation = () => {
  return (
    <footer
      style={{ backgroundColor: "#fafafa" }}
      className="fixed bottom-0 max-w-sm w-full m-auto flex justify-around items-center"
    >
      <Icon IconComponent={MdHomeFilled}></Icon>
      <Icon IconComponent={CiSearch}></Icon>
      <Icon IconComponent={CiSquarePlus}></Icon>
      <Icon IconComponent={CiHeart}></Icon>
      <Photo size="small" />
    </footer>
  );
};

export default Navigation;
