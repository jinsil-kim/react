import { BsThreeDots } from "react-icons/bs";
import PlaceLabel from "./PlaceLabel";
import Name from "./Name";
import Photo from "../../Photocomponents/Photo";

const Feedheader = (props) => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-2">
        <Photo size={"medium"} />
        <div className="flex flex-col gap-1">
          <Name name="jinsil" isPopular={true} />
          <PlaceLabel city={"Tokyo"} nation={"Japan"} />
        </div>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Feedheader;
