import { BsThreeDots } from "react-icons/bs";
import PlaceLabel from "./PlaceLabel";
import Name from "./Name";
import Photo from "../../Photocomponents/Photo";

const Feedheader = (props) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center gap-2">
        <Photo size={"medium"} image={props.image} />
        <div className="flex flex-col gap-1">
          <Name name={props.name} isPopular={props.isPopular} />
          <PlaceLabel city={props.city} nation={props.nation} />
        </div>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Feedheader;
