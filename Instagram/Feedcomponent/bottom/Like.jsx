import Photo from "../../PhotoComponent/Photo";
import LikebyPeople from "./LikebyPeople";

const Like = (props) => {
  return (
    <div className="flex gap-1 p-1">
      <Photo size="xs" image={props.image} />
      <LikebyPeople likePeople={props.likePeople} />
    </div>
  );
};

export default Like;
