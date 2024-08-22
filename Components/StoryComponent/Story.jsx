import Storyphoto from "../Photocomponents/Storyphoto";

const Story = (props) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center gap-1">
        <Storyphoto image={props.image} />
        <span className="text-xs font-semibold">
          {props.name || "Your story"}
        </span>
      </div>
    </div>
  );
};

export default Story;
