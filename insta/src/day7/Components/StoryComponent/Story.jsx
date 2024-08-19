import Storyphoto from "../Photocomponents/Storyphoto";

const Story = (props) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Storyphoto />
      <span className="text-xs font-semibold">
        {props.name || "Your story"}
      </span>
    </div>
  );
};

export default Story;
