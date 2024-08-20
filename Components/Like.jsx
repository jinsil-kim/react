import Photo from "./Photocomponents/Photo";

const Like = (props) => {
  return (
    <div className="flex flex-row items-center ">
      <Photo size="small" />
      <span className="text-xs mr-1"> Liked by</span>
      <span className="text-xs font-semibold mr-1">
        {props.name || "jinsil"}
      </span>
      <span className="text-xs mr-1"> and </span>
      <span className="text-xs font-semibold mr-1"> {props.num || "0"}</span>
    </div>
  );
};
export default Like;
