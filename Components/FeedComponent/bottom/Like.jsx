import Photo from "../../Photocomponents/Photo";
import LikeByPeople from "../bottom/LikeByPeople";

const Like = (props) => {
  return (
    <div className="flex gap-1 text-xs items-center p-1">
      <Photo size="small" image={props.image} />
      <LikeByPeople likePeople={props.likePeople} />
    </div>
  );
};

export default Like;
