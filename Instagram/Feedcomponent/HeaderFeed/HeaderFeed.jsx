import { HiOutlineDotsVertical } from "react-icons/hi";
import Name from "./Name";
import PlaceLabel from "./PlaceLabel";
import Photo from "../../PhotoComponent/Photo";

const HeaderFeed = (props) => {
  const data = {
    image: "feed/feed0.jpg",
    name: "jinsil",
    isPopular: false,
    place: "Incheon,",
    nation: "Korea",
  };

  return (
    <div className="flex flex-row gap-2 items-center p-2">
      <div
        style={{ width: "38px", height: "38px", border: "solid 1px #d91a46" }}
        className="flex justify-center items-center rounded-full p-0.5"
      >
        <Photo image={props.image} size="medium" />
      </div>
      <div>
        <Name name={props.name} isPopular={props.isPopular} />
        <PlaceLabel place={props.place} nation={props.nation} />
      </div>
      <div className="relative left-56 text-xl">
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};

export default HeaderFeed;
